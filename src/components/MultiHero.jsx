"use client"
import React, { useEffect, useState } from 'react'
import { client } from '../../sanity';
import urlFor from '../../ImgUrl';
import { Fade } from 'react-awesome-reveal';

const MultiHero = ({ title }) => {
    const [product, setProduct] = useState([]);
    const GetHero = async () => {
        const query = `*[_type =='home' && title == '${title}']{
            images,
            _id,
            description,
            title,
        }`
        const response = await client.fetch(query);
        setProduct(response)
    }
    useEffect(() => {
        GetHero()
    }, [])

    const ShowHero = product.map((item) => <div className='py-[20px]' key={item._id}><div>
        <img
            className="w-full sm:p-3 md:p-10"
            src={urlFor(item.images[0])}
            alt={item.title}
        />
    </div>
        <div className="felx flex-col sm:text-left m-3 md:text-center">
            <h3 className="sm:text-4xl md:text-6xl font-extrabold uppercase">
                {item.title}
            </h3>
            <p>
                {item.description}
            </p>
            <button className="rounded-[25px] m-3 bg-black text-white py-2 px-5">
                Shop
            </button>
            <button className="rounded-[25px] m-3 bg-black text-white py-2 px-5">
                Explore
            </button>
        </div></div>)
    return (
        <Fade >{ShowHero}</Fade>
    )
}

export default MultiHero