import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { XCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function PaymentCancel() {
  return (
    <div className="pt-32 pb-20">
      <Container className="max-w-2xl text-center">
        <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-8">
          <XCircle className="h-12 w-12 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-text-primary">
          Payment Cancelled
        </h1>
        <p className="text-xl text-text-secondary mb-8">
          Your payment was not processed. No charges were made.
        </p>
        <Link to="/premium">
          <Button>Try Again</Button>
        </Link>
      </Container>
    </div>
  );
}
