import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export function PaymentFailed() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md">
        <h1 className="text-2xl font-semibold text-red-600 mb-4">
          Payment Failed ❌
        </h1>

        <p className="mb-6 text-muted-foreground">
          The payment could not be completed.  
          If money was deducted, it will be refunded automatically.
        </p>

        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={() => navigate("/checkout")}>
            Try Again
          </Button>

          <Button onClick={() => navigate("/")}>
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
