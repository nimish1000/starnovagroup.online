import { useState } from 'react';
// Stripe SDK loader removed as we use server-side redirect


export function usePayment() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      // 1. Call backend to create session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to initiate checkout');
      }

      // 2. Redirect to Stripe
      // Assuming backend returns { url: '...' } for direct redirect
      // OR { id: '...' } for stripe.redirectToCheckout({ sessionId: id })
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Missing checkout URL");
      }

    } catch (error: any) {
      console.error('Payment error:', error);
      alert(`Payment failed: ${error.message || 'Unknown error'}. Please check console for details.`);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleCheckout, isLoading };
}
