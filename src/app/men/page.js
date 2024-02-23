"use client"
import React from 'react'
import GetProducts from '@/components/GetProducts'
import ProductCrousel from '@/components/ProductCrousel'
import MultiHero from '@/components/MultiHero'

const page = (props) => {
    return (
        <div className='py-10'>
            <MultiHero title={'Kicks that keep giving'} />
            <ProductCrousel />
            <GetProducts props={props.searchParams} category={"men"} />
            <MultiHero title={'Speed beyond your wildest dreams'} />
        </div>
    )
}

export default page