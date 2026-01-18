import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { CheckCircle2, Package, Home } from "lucide-react";

export function PaymentSuccess() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const orderId = params.get("orderId");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 py-12 px-4">
      <div className="max-w-lg w-full">
        {/* Success Icon Container */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Outer Ring Animation */}
            <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping"></div>
            <div className="absolute inset-0 rounded-full bg-green-500/10 animate-pulse"></div>

            {/* Success Icon */}
            <div className="relative bg-gradient-to-br from-green-500 to-green-600 rounded-full p-6 shadow-lg">
              <img
                src="/images/success.png"
                alt="Prakriti Pure Logo"
                className="h-10 md:h-14 w-auto"
              />
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100">
          {/* Header Gradient */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6 text-center">
            <h1
              className="text-3xl text-green-600 mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
              }}
            >
              🌿 Prakriti Pure
            </h1>

            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mt-3">
              <CheckCircle2 className="w-5 h-5 text-black" />
              <span className="text-foreground font-semibold">
                Payment Successful
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Main Message */}
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">
                Thank You for Your Order!
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Your payment has been successfully processed. We've received
                your order and will process it shortly.
              </p>
            </div>

            {/* Order ID Card */}
            {orderId && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-2">
                  <Package className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-900">
                    Order ID
                  </span>
                </div>
                <p className="font-mono text-lg font-semibold text-green-700 break-all">
                  {orderId}
                </p>
              </div>
            )}
            

            {/* Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-900">
                    Shipping
                  </span>
                </div>
                <p className="text-xs text-blue-700">
                  Your order will be shipped within{" "}
                  <strong>3-5 business days</strong>
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-900">
                    Status
                  </span>
                </div>
                <p className="text-xs text-purple-700">
                  Order confirmed and <strong>paid</strong>
                </p>
              </div>
            </div>

            {/* Decorative Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
              <span className="text-green-600 text-2xl">🌿</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
            </div>

            {/* Thank You Message */}
            <p className="text-center text-gray-600 text-sm leading-relaxed">
              We appreciate your trust in{" "}
              <strong className="text-green-700">Prakriti Pure</strong>. You'll
              receive an email confirmation shortly with all the details.
            </p>

            {/* Action Button */}
            <div className="pt-4 px-4 md:px-0">
  <Button
    onClick={() => navigate("/")}
    /* White background with a dark border and dark text */
    className="w-full bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold py-6 rounded-xl transition-colors duration-300 flex items-center justify-center"
  >
    <Home className="w-5 h-5 mr-2" />
    Continue Shopping
  </Button>
</div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-4 text-center border-t border-gray-100">
            <p className="text-xs text-gray-500">
              Questions? Contact us anytime. We're here to help!
            </p>
          </div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Prakriti Pure. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
