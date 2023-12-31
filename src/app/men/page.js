"use client"
import React from 'react'
import urlFor from '../../../ImgUrl'
import { client } from '../../../sanity'
import GetProducts from '@/components/GetProducts'
import ProductCrousel from '@/components/ProductCrousel'
import MultiHero from '@/components/MultiHero'
const page = () => {


    return (
        <div className='py-10 md:p-10'>
            <MultiHero title={'Kicks that keep giving'} />
            <ProductCrousel />
            <GetProducts category={"men"} />
            <MultiHero title={'Speed beyond your wildest dreams'} />
        </div>
    )
}

export default page