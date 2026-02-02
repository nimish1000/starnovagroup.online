import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PaymentSuccess() {
  return (
    <div className="pt-32 pb-20">
      <Container className="max-w-2xl text-center">
        <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-text-primary">
          Payment Successful!
        </h1>
        <p className="text-xl text-text-secondary mb-8">
          Thank you for your purchase. Your premium license has been activated.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/">
            <Button variant="secondary">Back to Home</Button>
          </Link>
          <Link to="/download">
            <Button>
              Download Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
