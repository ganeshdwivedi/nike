"use client"
import React, { useEffect, useState } from 'react'
import { client } from '../../sanity'
import urlFor from '../../ImgUrl'
import Link from 'next/link';

const RelatedProducts = ({ category, shoeType, currentProductId, params }) => {

    const [product, setProduct] = useState([]);
    console.log(params)
    const getProducts = async () => {
        const query = `*[_type == 'product' && category == "${category}" && shoeType == "${shoeType}" && _id != "${currentProductId}"]{
             images,
                _id,
                title,
                description,
                slug,
                price,
                category,
        }`
        const products = await client.fetch(query);
        console.log(products)
        setProduct(products);
    }
    useEffect(() => {
        getProducts()
    }, [])

    const AllProducts = product.map((item) =>
        <Link key={item._id} href={`/${item.category}/${item.slug.current}`}>
            <div className='p-3'>
                <div className='w-[150px] md:w-[300px] md:h-[300px] h-[150px] overflow-hidden'><img className='object-cover' src={urlFor(item.images[0])} alt={item.title} /></div>
                <div>
                    <h3 className='text-base font-medium my-1'>{item.title}</h3>
                    <p className='text-slate-700 text-sm'>{item.category}</p>
                    <h3 className='text-[15px] font-medium '>{item.price}</h3>
                </div>
            </div>
        </Link>
    )

    return (
        <div className='px-[25px] RelatedProduct'>
            <h3 className='text-[24px] font-medium'>Related Products</h3>
            <div className='flex flex-row overflow-x-scroll '>
                {AllProducts}
            </div>
        </div>
    )
}

export default RelatedProducts