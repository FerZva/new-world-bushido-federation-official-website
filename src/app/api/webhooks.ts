// // pages/api/webhooks.ts
// import { NextApiRequest, NextApiResponse } from "next";
// import { stripe } from "@/app/lib/stripe";
// import { buffer } from "micro";
// import Cors from "micro-cors";

// const cors = Cors();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const buf = await buffer(req);
//   const sig = req.headers["stripe-signature"] as string;

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
//   } catch (err) {
//     const errorMessage = err instanceof Error ? err.message : "Unknown error";
//     return res.status(400).send(`Webhook Error: ${errorMessage}`);
//   }

//   if (event.type === "checkout.session.completed") {
//     const session = event.data.object;
//     // Maneja la sesión completada
//   }

//   res.status(200).json({ received: true });
// }

// export default cors((req, res) => handler(req as any, res as any));
