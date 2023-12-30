"use client"
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { client } from '../../sanity'
import urlFor from '../../ImgUrl'


const Products = () => {
    const [product, setProduct] = useState([]);
    const getProducts = async () => {
        const query = `*[_type == 'product']{
             images,
                _id,
                title,
                description,
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


    const AllProducts = product.map((item, index) => <Card key={index} img={urlFor(item.images[0])} title={item.title} cat={item.category} description={`MRP:  ₹ ${item.price}`} />)
    return (
        <div className='products'>
            <h3 className='text-lg font-semibold m-10'>Trend Alert</h3>
            <div className='overflow-x-scroll m-5 flex-row flex'>
                {AllProducts}
            </div>
        </div>
    )
}

export default Products