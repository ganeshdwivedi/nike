"use client";
import React, { useState, useEffect } from "react";
import urlFor from "../../ImgUrl";
import { client } from "../../sanity";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import toast, { Toaster } from 'react-hot-toast';
import Link from "next/link";


function ReviewProduct({ params }) {
  const [image, setImage] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const sanituGet = async () => {
    const query = `*[_type == 'product' && slug.current == "${params?.slug}"]{
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
    setImage(products[0].images);
  };


  const showToast = (product) => {
    toast(() => (
      <div className="my-5">
        <Link href={"/cart"} className="w-[200px] mx-2 bg-black text-white rounded-[25px] px-5 py-2">View Cart</Link>
        <Link href={"/cart"} className="w-[200px] mx-2 border-black border-2 rounded-[25px] px-5 py-2">Checkout</Link>
      </div>
    ), { position: 'top-right', duration: 3000 })
    toast.custom((t) => (
      <div
        className={`bg-white px-6 py-4 shadow-2xl rounded-md ${t.visible ? 'animate-enter' : 'animate-leave'
          }`}
      >
        <div className="flex flex-row"> <div className="m-2"><img className="w-24" src={urlFor(product.images[0])} /></div>
          <div className="m-2">
            <p className="text-base my-2 font-medium">{product.title}</p>
            <p className="text-sm text-slate-600">{product.category}'s Shoes</p>
            <p className="text-sm font-medium">{product.price}</p></div></div>
      </div>),
      { position: 'top-right', duration: 3000 })
  };

  useEffect(() => {
    sanituGet();
  }, []);

  const addtocart = (product) => {
    dispatch(addToCart(product))
    showToast(product)
  }

  const BuyUrl =
    "https://api.whatsapp.com/send?phone=919179792991&text=%F0%9F%98%80Hey%20i%20want%20to%20buy%20this%20%0A%0A";
  const encodedurl = "https%3A%2F%2Fpuma-ganeshdwivedi.vercel.app%2FMen";

  const handleBuy = () => {
    window.open(`${BuyUrl}${encodedurl}/${params.slug}`);
  };


  return (
    <>

      {product.map((product) => (
        <div key={product?._id} className="pt-14 md:pt-10 text-start">
          <div className="flex md:my-20 flex-col items-center md:items-start md:flex-row md:justify-center">
            <div className="flex order-2 md:order-none md:overflow-hidden overflow-x-scroll flex-row md:flex-col">
              {image?.map((item, index) => (
                <img
                  key={index}
                  onClick={() => setThumbnail(item)}
                  className=" w-16 m-1"
                  alt={product?.title}
                  src={urlFor(item)}
                />
              ))}
            </div>
            <div className="md:w-[40vw] order-1 mx-3 overflow-hidden w-[90vw] h-full md:h-full ">
              <img
                className="object-cover rounded-md"
                src={urlFor(thumbnail ? thumbnail : product?.images[0])}
              />
            </div>

            <div className="w-[90vw] order-3 my-5 md:mx-16 md:w-[20vw]">

              <h1 className="text-2xl">{product?.title}</h1>
              <h1 className="text-base">{product?.category}'s shoes</h1>
              <h1 className="text-sm">{product?.shoeType}</h1>

              <div className="my-5">
                <h1 className="text-base font-medium">₹ {product?.price}</h1>
                <p className="text-slate-500 text-sm">incl. of taxes
                </p>
                <p className="text-slate-500 text-sm">(Also includes all applicable duties)</p>
              </div>

              <div className="flex flex-col"> <button
                onClick={() => addtocart(product)}
                className="bg-black my-2 md:w-[25vw] rounded-[25px] py-2 text-white"
              >
                Add to Bag
              </button>
                <button
                  className="border-2 border-black my-2 md:w-[25vw] rounded-[25px] py-2"
                >
                  Add to Favourite
                </button></div>
              <div className="my-10">
                <h1 className="text-[15px] text-justify font-medium w-[90vw] md:w-[25vw]">{product?.description}</h1>
              </div>
            </div>
          </div>
          <Toaster />
        </div >
      ))
      }

    </>
  );
}

export default ReviewProduct;
