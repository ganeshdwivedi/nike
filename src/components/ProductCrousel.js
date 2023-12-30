"use client"
import React, { useEffect, useState } from 'react'
import { client } from '../../sanity';
import urlFor from '../../ImgUrl';

const ProductCrousel = () => {
    const [product, setProduct] = useState([]);
    const getProducts = async () => {
        const query = `*[_type == 'home' && title == 'AlwaysIconic' ]{
             images,
                _id,
        }`
        const products = await client.fetch(query);
        console.log(products)
        setProduct(products[0].images);
    }
    useEffect(() => {
        getProducts()
    }, [])

    console.log("ok", product)
    const Allproducts = product.map((item, index) => <div key={index} className='sm:min-w-[80vw] md:min-w-[25vw] p-1 h-full'><img src={urlFor(item)} alt='' /></div>)
    return (
        <div className='product-crousel'>
            <h3 className='md:mx-16 sm:mx-10 font-semibold text-2xl'>Always Iconic</h3>
            <div className='flex flex-row overflow-x-scroll mx-8'>
                {Allproducts}
            </div>
        </div>
    )
}

export default ProductCrousel