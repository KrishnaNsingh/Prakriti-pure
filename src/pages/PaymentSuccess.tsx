import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

export function PaymentSuccess() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const orderId = params.get("orderId");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md">
        <h1 className="text-2xl font-semibold text-green-600 mb-4">
          Payment Successful 🎉
        </h1>

        <p className="mb-4">
          Thank you for your order!
        </p>

        {orderId && (
          <p className="text-sm text-muted-foreground mb-6">
            Order ID: <span className="font-mono">{orderId}</span>
          </p>
        )}

        <Button onClick={() => navigate("/")}>
          Continue Shopping
        </Button>
      </div>
    </div>
  );
}
