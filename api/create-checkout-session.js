import Stripe from 'stripe';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 1. Securely initialize Stripe with trimmed key
    // The || '' prevents crash if key is missing, .trim() removes whitespace
    const STRIPE_SECRET_KEY = (process.env.STRIPE_SECRET_KEY || '').trim();
    
    if (!STRIPE_SECRET_KEY) {
      throw new Error('Stripe Secret Key is missing in environment variables');
    }

    const stripe = new Stripe(STRIPE_SECRET_KEY);

    // 2. Determine Origin for Redirection
    const origin = request.headers.origin || 'https://onkra.online';

    // 3. Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Onkra.Online File Recovery – Premium',
              description: 'One-time purchase for full unlimited recovery.',
              // images: ['https://onkra.online/assets/box-art.png'],
            },
            unit_amount: 4999, // $49.99
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/payment-success`,
      cancel_url: `${origin}/payment-cancel`,
    });

    // 4. Return Session URL
    response.status(200).json({ url: session.url });

  } catch (error) {
    console.error('Stripe Checkout Error:', error);
    
    // Log key prefix safely for debugging (first 7 chars only)
    const key = process.env.STRIPE_SECRET_KEY || '';
    console.error('Debug Key Info:', { 
      length: key.length, 
      prefix: key.substring(0, 7) + '...',
      isTrimmed: key === key.trim() 
    });

    response.status(500).json({ 
      error: 'Internal Server Error', 
      message: error.message 
    });
  }
}
