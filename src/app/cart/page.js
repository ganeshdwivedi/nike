"use client"
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import urlFor from '../../../ImgUrl'
import Link from 'next/link'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { removeFromCart } from '@/redux/cartSlice'
import HelpIcon from '@mui/icons-material/Help';
import getStripe from '../../../lib/getStripe'
import toast, { Toaster } from 'react-hot-toast';



const page = () => {
    const cartItems = useSelector((state) => state.cart);
    const [token, setToken] = useState(null);

    const dispatch = useDispatch();
    const removefromcart = (id) => {
        dispatch(removeFromCart(id))
    }

    //getting token
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [token])

    //checkout 

    const handleCheckout = async () => {
        if (cartItems.length == 0) {
            toast.error("please Add products to cart")
        }
        else if (token) {
            const stripe = await getStripe();

            const response = await fetch('/api/stripe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartItems)
                // product, image
            })

            if (response.statusCode === 500) return;
            toast.loading('...redirecting')
            console.log(stripe)
            // const SESS_ID = response.data.session.id
            const data = await response.json();
            console.log(data.session.id)
            stripe.redirectToCheckout({ sessionId: data.session.id })

        } else {
            toast.error("please login first")
        }
    }
    return (
        <div className='p-10 py-24 flex sm:flex-col md:flex-row items-start'>
            <div className='w-[80vw] md:w-[65vw] md:m-10'>
                <p className='text-xl mb-10 font-medium'>{cartItems.length > 0 ? "Bag" : "Bag 0 Items"}</p>
                {
                    cartItems.length == 0 ? <h3>Please Add product to cart</h3> :
                        cartItems.map((item) => {

                            return (<div key={item._id}>
                                <div className='flex flex-col md:flex-row justify-around my-5'>
                                    <div className='flex md:flex-row '>
                                        <div className='w-36  h-full md:h-36'> <Link href={`/${item.category}/${item.slug.current}`}> <img className='w-full h-full rounded-md object-cover' src={urlFor(item.images[0])} alt={item.title} /></Link></div>
                                        <div className='mx-5'>
                                            <p className='text-base font-medium'>{item.title}</p>
                                            <p className='text-sm text-slate-500'>{item.category}'s Shoes</p>
                                            <p className='text-sm font-medium'>{item.shoeType}</p>
                                            <button className='my-3' onClick={() => removefromcart(item._id)}><DeleteOutlinedIcon /></button>
                                        </div></div>
                                    <div>
                                        <p className='font-medium text-lg md:text-base'>MRP: ₹ {item.price}</p>
                                    </div>
                                </div>
                                <hr className='w-full text-black' />
                            </div>)
                        })
                }

            </div>
            <div className='w-[80vw] md:w-[35vw] md:m-10'>
                <p className='text-lg font-medium my-5'>Summary</p>
                <div>
                    <div className='flex flex-row my-2 items-center justify-between'>
                        <p className='flex items-center justify-between'>Subtotal  <HelpIcon className='text-base' /></p>
                        <p>₹ {cartItems.reduce((acc, pre) => (acc + pre.price), 0)}</p>
                    </div>
                    <div className='flex flex-row my-2 justify-between'>
                        <p>Estimated Delivery & Handling</p>
                        <p>₹ {cartItems.length * 250}</p>
                    </div>
                    <hr className='w-full text-black my-2' />
                    <div className='flex flex-row justify-between'>
                        <p className='text-base font-medium'>Total</p>
                        <p>₹ {cartItems.reduce((acc, pre) => (acc + pre.price), 0) + cartItems.length * 250}</p>
                    </div>
                    <hr className='w-full text-black my-2' />
                    <div className='flex flex-col justify-between'>
                        <button className={token ? "hidden" : 'px-3 py-3 my-3 bg-black text-white rounded-[25px]'}>Guest Checkout</button>
                        <button onClick={handleCheckout} className='px-3 py-3 my-3 bg-black text-white rounded-[25px]'>Member Checkout</button>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default page