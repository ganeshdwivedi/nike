import React from 'react'

const Card = ({ img, title, cat, description }) => {
    return (
        <div className='p-3'>
            <div className='w-[300px] md:w-[389px] md:h-[389px] h-[300px] overflow-hidden'><img className='object-cover' src={img} alt={title} /></div>
            <div>
                <h3 className='text-base font-medium my-1'>{title}</h3>
                <p className='text-slate-700 text-sm my-1'>{cat}</p>
                <h3 className='text-base font-medium my-2'>{description}</h3>
            </div>
        </div>
    )
}

export default Card