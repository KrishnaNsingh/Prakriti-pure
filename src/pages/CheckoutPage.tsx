import { useState } from "react";
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
const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";


export function CheckoutPage() {
  
  
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");

  const subtotal = getCartTotal();
  const shipping = subtotal > 500 ? 0 : 100.0;
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

  if (cart.length === 0) {
    navigate("/cart");
    return null;
  }
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

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     await axios.post("http://localhost:5000/api/orders", orderData);
  //     toast.success("Order placed successfully!");
  //     clearCart();
  //     setTimeout(() => navigate("/"), 2000);
  //   } catch (error) {
  //     toast.error("Order failed");
  //     console.error(error);
  //   }
  // };

  const createOrder = async () => {
    const { data } = await axios.post(
      `${API}/api/orders`,
      orderData
    );

    setMongoOrderId(data._id);
    return data._id;
  };

  const startPayment = async () => {
    const orderId = mongoOrderId ?? (await createOrder());

    const { data } = await axios.post(
      `${API}/api/payment/create-order`,
      { orderId }
    );

    openRazorpay(data);
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

      /*    check if payment successfull ! 

      handler: function (response: any) {
        // TEMP: just log
        console.log("Payment success", response);
      },*/
      handler: async function (response: any) {
        console.log("🔥 RAZORPAY HANDLER FIRED", response);
        try {
          console.log("➡️ CALLING /verify API");
          const verifyRes = await axios.post(
            `${API}/api/payment/verify`,
            {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            }
          );
          console.log("✅ /verify RESPONSE", verifyRes.data);

          if (verifyRes.data.success) {
            clearCart();
            navigate(`/payment-success?orderId=${verifyRes.data.orderId}`);
          } else {
            navigate(`/payment-failed`);
          }
        } catch (error) {
          console.error(error);
          navigate(`/payment-failed`);
        }
      },
      modal: {
        ondismiss: function () {
          console.log("Payment popup closed");
          toast("Payment cancelled");
        },
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-background">
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
                    <Label htmlFor="address">Street Address</Label>
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

              {/* Payment Method */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="mb-6">Payment Method</h3>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  <div className="space-y-3">
                    {/* <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                        <CreditCard className="w-5 h-5" />
                        Credit / Debit Card
                      </Label>
                    </div> */}
                    <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label
                        htmlFor="upi"
                        className="flex items-center gap-2 cursor-pointer flex-1"
                      >
                        <Smartphone className="w-5 h-5" />
                        UPI
                      </Label>
                    </div>
                    {/* <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Banknote className="w-5 h-5" />
                        Cash on Delivery
                      </Label>
                    </div> */}
                  </div>
                </RadioGroup>

                {/* Card Details */}
                {/* {paymentMethod === "card" && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        required={paymentMethod === "card"}
                        className="mt-2"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          required={paymentMethod === "card"}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          required={paymentMethod === "card"}
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                )} */}

                {/* UPI Details */}
                {/* {paymentMethod === "upi" && (
                  <div className="mt-6">
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input
                      id="upiId"
                      placeholder="yourname@upi"
                      required={paymentMethod === "upi"}
                      className="mt-2"
                    />
                  </div>
                )} */}
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

                {/* <Button
                  type="submit"
                  size="lg"
                  onClick={startPayment} 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                >
                  Place Orderd
                </Button> */}
                <Button
                  type="button"
                  size="lg"
                  onClick={startPayment}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                >
                  Pay with UPI
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
