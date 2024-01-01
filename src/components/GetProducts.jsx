"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "../../sanity";
import urlFor from "../../ImgUrl";
import { useRouter } from "next/navigation";
import TuneIcon from '@mui/icons-material/Tune';


function GetProducts({ category, props }) {

  const [product, setProduct] = useState([]);
  const router = useRouter()
  if (props.shoeType == 'Gym') {
    props.shoeType = 'Gym & Traning'
  } else if (props.shoeType == 'Sandels') {
    props.shoeType = 'Sandels & Slides'
  }
  const price = props.price ? `order(price ${props.price})` : ""
  const shoe = props.shoeType ? `&& shoeType == "${props.shoeType}"` : ""
  const sanituGet = async () => {
    const query = `*[_type == 'product' && category == "${category}" ${shoe}] | ${price} {
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
  }, [props]);

  const getAllProducts = product.map((product) => <Link className="" key={product._id} href={`/${category}/${product.slug.current}`}>
    <div className='p-3'>
      <div className='w-[45vw] md:w-[23vw] h-[210px] md:h-[300px] overflow-hidden'><img className='object-cover' src={urlFor(product?.images[0])} alt={product?.title} /></div>
      <div>
        <h3 className='text-base font-medium my-1'>{product?.title}</h3>
        <p className='text-slate-700 text-sm my-1'>{product?.category}'s Shoes</p>
        <h3 className='text-[15px] font-medium my-2'>MRP: ₹ {product?.price}</h3>
      </div>
    </div>
  </Link>);

  return (
    <>
      <div className="flex justify-center md:flex-row flex-col sm:my-[4.5rem] my-10">
        <div className='w-[80vw] md:w-[25vw] mx-10 md:mx-0 flex-row flex md:flex-col items-start '>
          <p className="text-xl font-medium my-5">{product[0]?.category}'s Shoes({product?.length})</p>
          <div className="flex text-base text-left font-medium flex-col">
            <button className={props.shoeType == '' ? "underline underline-offset-4 text-left my-2" : "text-left my-2"} onClick={() => router.replace(`/${category}`)}>All</button>
            <button className={props.shoeType == 'Sneakers' ? "underline underline-offset-4 text-left my-2" : "text-left my-2"} onClick={() => router.replace(`/${category}/?shoeType=Sneakers`)} >Sneakers</button>
            <button onClick={() => router.replace(`/${category}/?shoeType=Jordan`)} className={props.shoeType == 'Jordan' ? "underline underline-offset-4 text-left my-2" : "text-left my-2"}>Jordan</button>
            <button onClick={() => router.replace(`/${category}/?shoeType=Running`)} className={props.shoeType == 'Running' ? "underline underline-offset-4 text-left my-2" : "text-left my-2"}>Running</button>
            <button onClick={() => router.replace(`/${category}/?shoeType=Gym`)} className={props.shoeType == 'Gym & Traning' ? "underline underline-offset-4 text-left my-2" : "text-left my-2"}>Gym & Training</button>
            <button onClick={() => router.replace(`/${category}/?shoeType=Basketball`)} className={props.shoeType == 'Basketball' ? "underline underline-offset-4 text-left my-2" : "text-left my-2"}>Basketball</button>
            <button onClick={() => router.replace(`/${category}/?shoeType=Football`)} className={props.shoeType == 'Football' ? "underline underline-offset-4 text-left my-2" : "text-left my-2"} >Football</button>
            <button onClick={() => router.replace(`/${category}/?shoeType=Sandels`)} className={props.shoeType == 'Sandels & Slides' ? "underline underline-offset-4 text-left my-2" : "text-left my-2"} >Sandels & slides</button>
            <hr className="w-full text-black " />

          </div>
          <div className="flex flex-col text-sm">
            <p>Sort by price <TuneIcon /></p>
            <button className={props.price == 'asc' ? "underline underline-offset-4 text-left my-2" : "text-left my-2"} onClick={() => router.replace(props.shoeType ? `/${category}/?shoeType=${props.shoeType}&price=asc` : `/${category}/?price=asc`)}>Low to High </button>
            <button className={props.price == 'desc' ? "underline underline-offset-4 text-left my-2" : "text-left my-2"} onClick={() => router.replace(props.shoeType ? `/${category}/?shoeType=${props.shoeType}&price=desc` : `/${category}/?price=desc`)}>High to Low </button>
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
