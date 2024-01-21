"use client";
import React, { useState, useEffect } from "react";
import urlFor from "../../ImgUrl";
import { client } from "../../sanity";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import ShowToast from "./ShowToast";
import RelatedProducts from "./RelatedProducts";


function ReviewProduct({ params }) {
  const [image, setImage] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [product, setProduct] = useState([]);
  const [toggle, setToggle] = useState(false)
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

  useEffect(() => {
    sanituGet();
  }, [toggle]);

  const addtocart = (product) => {
    dispatch(addToCart(product))
    setToggle(!toggle)
    setTimeout(() => setToggle(false), 1500)
  }


  return (
    <>

      {product.map((product) => (
        <div key={product?._id} className="pt-14 md:pt-10 text-start">
          {
            toggle ? <ShowToast className={"md:right-20 md:top-20 right-0 top-20"} product={product} /> : ""
          }
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
          <RelatedProducts currentProductId={product?._id}
            shoeType={product?.shoeType} category={product?.category} />
        </div >

      ))
      }

    </>
  );
}

//currentProductId={product?._id}
// shoeType={product?.shoeType}
export default ReviewProduct;
