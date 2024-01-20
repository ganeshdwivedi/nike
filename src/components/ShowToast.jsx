import React from 'react'
import urlFor from '../../ImgUrl'
import Link from 'next/link'
import { Slide } from 'react-awesome-reveal'

const ShowToast = ({ product, className }) => {
    return (

        <Slide className={`${className} fixed`} duration={150} direction='down'>
            <div className={`overflow-hidden rounded-lg shadow-xl w-[270px] bg-white flex flex-col`}>
                <div className="flex flex-row">
                    <div className="m-2">
                        <img className="w-24" src={urlFor(product.images[0])} /></div>
                    <div className="m-2">
                        <p className="text-base my-2 font-medium">{product.title}</p>
                        <p className="text-sm text-slate-600">{product.category}'s Shoes</p>
                        <p className="text-sm font-medium">{product.price}</p></div>
                </div>
                <div className="my-4">
                    <Link href={"/cart"} className="w-[200px] mx-2 bg-black text-white rounded-[25px] px-5 py-2">View Cart</Link>
                    <Link href={"/cart"} className="w-[200px] mx-2 border-black border rounded-[25px] px-5 py-2">Checkout</Link>
                </div>
            </div>
        </Slide>
    )
}

export default ShowToast