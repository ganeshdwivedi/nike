import React from 'react'

const Essentials = () => {
    return (
        <div className='md:flex md:flex-row gap-3 md:mx-10'>
            <div className='w-full h-full overflow-hidden'>
                <img className='md:h-[450px] md:scale-x-125' src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/0bb04be7-4897-4404-b920-9c6417726cac/nike-just-do-it.png' alt='' />
                <button className='px-5 py-2'>Men's</button>
            </div>
            <div className='w-full h-full overflow-hidden'>
                <img className='md:h-[450px] md:scale-x-125' src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/09e29ab8-fef6-4d20-986d-b131b966fb11/nike-just-do-it.png' alt='' />
                <button className='px-5 py-2 '>Women's</button>
            </div>
            <div className='w-full h-full overflow-hidden'>
                <img className='md:h-[450px] md:scale-x-125' src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/87005d01-6889-41cf-85bc-2cdbb96ac2f5/nike-just-do-it.png' alt='' />
                <button className='px-5 py-2 '>Kid's</button>
            </div>
        </div>
    )
}

export default Essentials