import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CreditCard, Smartphone, Banknote } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
const API = import.meta.env.VITE_API_BASE_URL || "https://localhost:5000";

export function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");

  const subtotal = getCartTotal();
  const shipping = subtotal > 999 ? 0 : 100.0;
  const total = subtotal + shipping;

  // submit inputs !
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

  //Razorpay OrderId from mongoDB
  const [mongoOrderId, setMongoOrderId] = useState<string | null>(null);

  // if (cart.length === 0) {
  //   navigate("/cart");
  //   return null;
  // }
  const FREE_DELIVERY_THRESHOLD = 999;

  const amountToFreeShipping =
    subtotal < FREE_DELIVERY_THRESHOLD ? FREE_DELIVERY_THRESHOLD - subtotal : 0;

  useEffect(() => {
    if (cart.length === 0 && !mongoOrderId) {
      navigate("/cart");
    }
  }, [cart.length, mongoOrderId, navigate]);

  const orderData = {
    customer: {
      firstName,
      lastName,
      email,
      phone,
    },
    shippingAddress: {
      address,
      city,
      state,
      zip,
      country,
    },
    cartItems: cart.map((item) => ({
      productId: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: item.quantity,
    })),
    pricing: {
      subtotal,
      shipping,
      total,
    },
  };

  const createOrder = async () => {
    const { data } = await axios.post(`${API}/api/orders/create`, orderData);

    setMongoOrderId(data._id);
    return data._id;
  };

  const [isPaying, setIsPaying] = useState(false);
  //start payment
  // const startPayment = async () => {
  //   // prevent double click
  //   if (isPaying) return;
  //   //check if all form are filled
  //   if (!firstName || !email || !phone || !address) {
  //     toast.error("Please fill all required fields");
  //     return;
  //   }
  //   try {
  //     setIsPaying(true);

  //     const orderId = mongoOrderId ?? (await createOrder());

  //     const { data } = await axios.post(`${API}/api/payment/create-order`, {
  //       orderId,
  //     });

  //     openRazorpay(data);
  //   } catch (error) {
  //     toast.error("Unable to start payment");
  //     setIsPaying(false);
  //   }
  // };
  const startPayment = async () => {
    if (isPaying) return;

    // -------- Frontend validation --------

    if (!firstName.trim()) {
      toast.error("First name is required");
      return;
    }

    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!phone.trim()) {
      toast.error("Phone number is required");
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid 10-digit Indian mobile number");
      return;
    }

    if (!address.trim()) {
      toast.error("Shipping address is required");
      return;
    }

    // -------- Start payment --------

    try {
      setIsPaying(true);

      const orderId = mongoOrderId ?? (await createOrder());

      const { data } = await axios.post(`${API}/api/payment/create-order`, {
        orderId,
      });

      openRazorpay(data);
    } catch (error) {
      toast.error("Unable to start payment. Please try again.");
      setIsPaying(false);
    }
  };

  const openRazorpay = (razorpayOrder: any) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: razorpayOrder.amount,
      currency: "INR",
      name: "Prakriti Pure",
      description: "Order Payment",
      order_id: razorpayOrder.id,

      method: {
        upi: true,
        card: true,
        netbanking: false,
        wallet: false,
      },
      handler: function () {
        clearCart();
        navigate("/payment-success");
      },
      modal: {
        ondismiss: function () {
          console.log("Payment popup closed");
          setIsPaying(false);
          toast("Payment cancelled");
        },
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-background">
      {subtotal < FREE_DELIVERY_THRESHOLD && (
        <div className="flex items-center justify-center bg-yellow-50 border border-yellow-200 text-yellow-800 px-3 py-2 rounded-md text-sm mb-3">
          💡 Add items worth <strong>₹{amountToFreeShipping}</strong> more to
          get <strong>FREE DELIVERY</strong>
        </div>
      )}

      {subtotal >= FREE_DELIVERY_THRESHOLD && (
        <div className="flex items-center justify-center bg-green-50 border border-green-200 text-green-700 px-3 py-2 rounded-md text-sm mb-3">
          🚚 You’ve unlocked <strong>FREE DELIVERY</strong>
        </div>
      )}

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-6 md:py-12">
        <h1 className="mb-8">Checkout</h1>

        <form>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="md:col-span-2 space-y-6">
              {/* Customer Information */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="mb-6">Customer Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="mb-6">Shipping Address</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">House Street Address</Label>
                    <Input
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State / Province</Label>
                      <Input
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="zip">ZIP / Postal Code</Label>
                      <Input
                        id="zip"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
                <h3 className="mb-6">Order Summary</h3>

                {/* Cart Items */}
                <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm truncate">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Qty: {item.quantity}
                        </p>
                        <p className="text-sm text-primary">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-4 mb-6 border-t border-border pt-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>
                      {shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span>Total</span>
                      <span className="text-xl text-primary">
                        ₹{total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Desktop Pay Button */}
                <div className="hidden md:block">
                  <Button
                    type="button"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground rounded-full"
                    onClick={startPayment}
                    disabled={isPaying}
                  >
                    {isPaying ? "Processing..." : "Pay Now"}
                  </Button>
                </div>

                {/* Mobile Pay Button */}
                <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white p-4 shadow-lg">
                  <Button
                    type="button"
                    size="lg"
                    disabled={isPaying}
                    onClick={startPayment}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                  >
                    {isPaying ? "Processing Payment..." : "Pay Now"}
                    {/* Pay with UPI */}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
