"use client"
import React from 'react'
import GetProducts from '@/components/GetProducts'
import MultiHero from '@/components/MultiHero'
import ProductCrousel from '@/components/ProductCrousel'

const page = (props) => {
    return (
        <div className='py-10 md:p-10'>
            <MultiHero title={'Bold moves, Bold looks'} />
            <ProductCrousel />
            <GetProducts props={props.searchParams} category={"women"} />
            <MultiHero title={'Rise and Shine'} />
        </div>
    )
}

export default page