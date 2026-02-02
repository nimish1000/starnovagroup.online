import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { ShieldCheck, Loader2 } from "lucide-react";
import { usePayment } from "../hooks/usePayment";

export default function Premium() {
  const { handleCheckout, isLoading } = usePayment();

  return (
    <div className="pt-24 pb-16">
      <Container className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-text-primary">
          Upgrade to Premium
        </h1>
        <p className="text-xl text-text-secondary mb-12">
          Unlock unlimited file recovery and priority support with a one-time purchase.
        </p>

        <div className="bg-surface border border-border rounded-xl p-8 shadow-lg mb-12">
          <div className="flex justify-between items-center border-b border-border pb-6 mb-6">
            <div className="text-left">
              <h3 className="text-2xl font-semibold">Lifetime License</h3>
              <p className="text-text-secondary">One-time payment, no subscriptions.</p>
            </div>
            <div className="text-3xl font-bold text-primary">
              $49.99
            </div>
          </div>

          <ul className="space-y-4 mb-8 text-left max-w-md mx-auto">
            {['Unlimited Data Recovery', 'Deep Scan Technology', 'All File Formats Supported', 'Priority 24/7 Support', 'Lifetime Updates'].map((feature) => (
              <li key={feature} className="flex items-center text-text-secondary">
                <ShieldCheck className="h-5 w-5 text-green-500 mr-3" />
                {feature}
              </li>
            ))}
          </ul>

          <Button 
            size="lg" 
            className="w-full sm:w-auto min-w-[200px] h-14 text-lg"
            onClick={handleCheckout}
            disabled={isLoading}
          >
            {isLoading ? (
               <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
               <ShieldCheck className="mr-2 h-5 w-5" />
            )}
            {isLoading ? "Redirecting..." : "Buy Software"}
          </Button>
          <p className="mt-4 text-sm text-text-secondary">
            Secure payment via Stripe. 30-day money-back guarantee.
          </p>
        </div>
      </Container>
    </div>
  );
}
