"use client"
import React from 'react'
import GetProducts from '@/components/GetProducts'
import MultiHero from '@/components/MultiHero'
import ProductCrousel from '@/components/ProductCrousel'

const page = (props) => {
    return (
        <div className='py-10 md:p-10'>
            <MultiHero title={'Today just got easier'} />
            <ProductCrousel />
            <GetProducts props={props.searchParams} category={"kids"} />
            <MultiHero title={'For all her moves'} />
        </div>
    )
}

export default page