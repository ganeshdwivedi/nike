"use client";
import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { client } from "../../sanity";
import urlFor from "../../ImgUrl";
import Card from "./Card";

function GetProducts({ category }) {
  const [product, setProduct] = useState([]);

  const sanituGet = async () => {
    const query = `*[_type == 'product' && category == "${category}"]{
                title,
                slug,
                category,
                shoeType,
                price,
                description,
                images,
                _id,
              }`;
    const products = await client.fetch(query);
    setProduct(products);

  };
  useEffect(() => {
    sanituGet();
  }, []);

  console.log(product)
  const getAllProducts = product.map((product, index) => <Link className="" key={product._id} href={`/men/${product.slug.current}`}>
    <div className='p-3'>
      <div className='w-[45vw] md:w-[23vw] h-[300px] overflow-hidden'><img className='object-cover' src={urlFor(product?.images[0])} alt={product?.title} /></div>
      <div>
        <h3 className='text-base font-medium my-1'>{product?.title}</h3>
        <p className='text-slate-700 text-sm my-1'>{product?.category}'s Shoes</p>
        <h3 className='text-[15px] font-medium my-2'>MRP: ₹ {product?.price}</h3>
      </div>
    </div>
  </Link>);

  return (
    <>

      <div className="flex justify-center sm:my-[4.5rem] my-10">
        <div className='w-[25vw] hidden md:flex flex-col items-start '>
          <p className="text-xl font-medium my-5">{product[0]?.category}'s Shoes({product?.length})</p>
          <div className="flex text-base text-left font-medium flex-col">
            <button className="text-left my-2">Sneakers</button>
            <button className="text-left my-2">Jordan</button>
            <button className="text-left my-2">Running</button>
            <button className="text-left my-2">Gym & Training</button>
            <button className="text-left my-2">Basketball</button>
            <button className="text-left my-2">Football</button>
            <button className="text-left my-2">sandal & slides</button>
          </div>
        </div>
        <div className="grid md:w-[80vw] w-[100vw] grid-cols-2 md:grid-cols-3 md:gap-x-10">
          {getAllProducts}
        </div>
      </div>
    </>
  );
}

export default GetProducts;
