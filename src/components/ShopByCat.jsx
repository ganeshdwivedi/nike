"use client"
import React, { useEffect, useState } from 'react'
import { client } from '../../sanity'
import urlFor from '../../ImgUrl'

const ShopByCat = () => {
    const [product, setProduct] = useState([]);
    const GetCategory = async () => {
        const query = `*[_type == 'home' && homeType == 'CatCrousel' ]{
            title,
            description,
            _id,
            images
        }`
        const response = await client.fetch(query);
        console.log(response)
        setProduct(response)
    }
    useEffect(() => {
        GetCategory()
    }, [])

    const ShowCategory = product.map((item) => <div className='py-3 px-1'>
        <div className='w-[300px] md:w-[389px] overflow-hidden'><img className='object-cover' src={urlFor(item.images[0])} alt={item.title} /></div>
        <div>
            <h3 className='text-sm font-medium my-1'>{item.title}</h3>
            <h3 className='text-base font-medium my-2'>{item.description}</h3>
        </div>
    </div>)

    return (
        <div className='my-10' >
            <h2 className='mx-10 my-5 text-xl font-semibold'>Shop by Sport</h2>
            <div className='flex md:flex-row HomeCat overflow-x-scroll mx-10'>
                {ShowCategory}
            </div>
        </div>
    )
}

export default ShopByCat