import Link from 'next/link'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Essentials = () => {
    return (
        <Fade>
            <div className='md:flex md:flex-row gap-3 md:mx-10 md:px-0 px-10'>
                <Link href={'/men'} className='w-full h-full overflow-hidden'>
                    <img className='w-full h-full' src='https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/3c36844b-9740-4b40-b024-efbf068f8ef5/image.png' alt='' />
                    <button className='px-5 py-2'>Men's</button>
                </Link>
                <Link href={"/women"} className='w-full h-full overflow-hidden'>
                    <img className='w-full h-full' src='https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/46a63970-621c-454c-951b-da4a852be392/image.png' alt='' />
                    <button className='px-5 py-2 '>Women's</button>
                </Link>
                <Link href={"/kids"} className='w-full h-full overflow-hidden'>
                    <img className='w-full h-full' src='https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/390ccdaf-9af1-452d-9791-ec9259829cff/image.png' alt='' />
                    <button className='px-5 py-2 '>Kid's</button>
                </Link>
            </div>
        </Fade>
    )
}

export default Essentials