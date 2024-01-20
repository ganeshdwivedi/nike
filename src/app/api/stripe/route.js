import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

import { NextResponse } from 'next/server';

const MY_URL = "https://nike-git-master-ganeshdwivedi.vercel.app/"

export async function POST(req) {
    const CompleteProduct = await req.json();
    console.log(CompleteProduct)

    const FinalData = CompleteProduct.map((item) => {
        const image = item.images[0];
        const img = image.asset._ref;
        const newImage = img.replace('image-', 'https://cdn.sanity.io/images/y19o6wz8/production/').replace('-webp', '.webp');
        console.log(newImage)
        return {
            price_data: {
                currency: 'inr',
                product_data: {
                    name: item.title,
                    images: [newImage]
                },
                unit_amount: item.price * 100,
            },
            quantity: 1
        }
    })


    console.log("final:", FinalData)


    if (req.method === 'POST') {
        try {
            const params = {
                submit_type: 'pay',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_options: [
                    { shipping_rate: 'shr_1OaUwuSAmOoZPtXBvOmK5NX1' },
                    { shipping_rate: 'shr_1OaUykSAmOoZPtXBwfSUZEDd' }
                ],
                line_items: FinalData,
                mode: 'payment',
                success_url: `${MY_URL}/?success=true`,
                cancel_url: `${MY_URL}/?canceled=true`,
            }
            //checkout session
            const session = await stripe.checkout.sessions.create(params);
            return NextResponse.json({ session }, { status: 200 });
        } catch (err) {
            return NextResponse.json({ error: err.message }, { status: 500 });
        }
    } else {
        // NextResponse.setHeader('Allow', 'POST');
        return NextResponse.json({ error: error.message }, { status: 404 });
    }
}