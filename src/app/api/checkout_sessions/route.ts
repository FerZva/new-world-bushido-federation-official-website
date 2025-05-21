import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const items = body.items;

    interface Item {
      name: string;
      image: string;
      price: number;
      quantity: number;
    }

    const origin = req.headers.get("origin") || "http://localhost:3000";

    const transformedItems = items.map((item: Item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [origin + item.image],
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: transformedItems,
      mode: "payment",
      success_url: `${origin}/success`,
      cancel_url: `${origin}/`,
    });

    return NextResponse.json({ sessionURL: session.url });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Stripe error:", err);
      return new NextResponse(err.message, { status: 500 });
    }
    return new NextResponse("Unexpected error", { status: 500 });
  }
}
