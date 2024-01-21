"use client"
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { client } from '../../sanity'
import urlFor from '../../ImgUrl'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'


const Products = () => {
    const [product, setProduct] = useState([]);
    const getProducts = async () => {
        const query = `*[_type == 'product'][1..5]{
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

    const AllProducts = product.map((item, index) => {
        return (

            <Link key={item._id} href={`${item.category}/${item.slug.current}`}>
                <Card img={urlFor(item.images[0])} title={item.title} cat={item.category} description={`MRP:  ₹ ${item.price}`} />
            </Link>

        )
    }


    )
    return (
        <div className='products'>
            <h3 className='text-lg font-semibold m-10'>Trend Alert</h3>
            <div className='overflow-x-scroll m-5 flex-row flex'>
                <Fade cascade="true" duration={200} triggerOnce="true">
                    {AllProducts}
                </Fade>
            </div>
        </div>
    )
}

export default Products