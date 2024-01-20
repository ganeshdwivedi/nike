"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import toast, { Toaster } from "react-hot-toast";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useSelector } from "react-redux";
import CartBag from "./CartBag";


function Navbar() {
  const [toggle, settoggle] = useState(false);
  const [token, setToken] = useState(null);
  const cartItems = useSelector((state) => state.cart)
  const Toggle = () => {
    settoggle(!toggle);
  };
  const navlinkcss =
    "text-[15px] font-medium hover:underline decoration-black decoration-2 underline-offset-8";
  const mobNavlinkcss =
    "text-[25px] font-medium hover:underline decoration-black decoration-2 underline-offset-8";

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [token])

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  return (
    <>
      <nav className="relative">
        <div className="flex w-full z-40 bg-white  fixed flex-row justify-between items-center  py-3 px-[25px]">
          <div>
            <Link href={"/"}>
              <img
                className="w-14"
                src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png"
              />
            </Link>
          </div>
          <div className="md:block sm:hidden">
            <ul className="flex flex-row gap-4">
              <li className={navlinkcss}>
                <Link href="/">New & Featured</Link>
              </li>
              <li className={navlinkcss}>
                <Link href={"/men"}>Men</Link>
              </li>
              <li className={navlinkcss}>
                <Link className={""} href={"/women"}>
                  women
                </Link>
              </li>
              <li className={navlinkcss}>
                <Link className={""} href="/kids">
                  kids
                </Link>
              </li>
              <li className={navlinkcss}>
                <Link href="/sale">Sale</Link>
              </li>
              <li className={navlinkcss}>
                <Link className={""} href="/customize">
                  Customize
                </Link>
              </li>
              <li className={navlinkcss}>
                <Link className={""} href="/gifts">
                  Gifts 🎁
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center flex-row gap-5">
            <Link href={"/wishlist"}>
              <FavoriteBorderIcon fontSize="medium" />
            </Link>

            <Link href={"/cart"}>
              <CartBag number={cartItems.length} />
            </Link>
            <Link className={token ? "hidden" : "px-[20px] py-[7px] bg-black rounded-[25px] text-white"} href={"/account/login"}>
              Login
            </Link>
            <button onClick={logout} className={token ? "px-[20px] py-[7px] bg-black rounded-[25px] text-white" : "hidden"}>
              Logout
            </button>
            <button
              onClick={Toggle}
              className="text-black sm:block md:hidden Hamburger "
            >
              {toggle ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
            </button>
          </div>
        </div>
      </nav>

      {toggle && (
        <div
          className="p-10 z-10 mr-20 duration-1000 delay-300 ease-in-out pt-20 fixed bg-white w-[100vw] h-[100vh]">
          <div className="">
            <div className={`flex-col flex gap-4`}>
              <li duration={200} className={mobNavlinkcss}>
                <Link href="/">New & Featured</Link>
              </li>
              <li duration={200} className={mobNavlinkcss}>
                <Link href={"/men"}>Men</Link>
              </li>
              <li duration={200} className={mobNavlinkcss}>
                <Link className={""} href={"/women"}>
                  women
                </Link>
              </li>
              <li duration={200} className={mobNavlinkcss}>
                <Link className={""} href="/kids">
                  kids
                </Link>
              </li>
              <li duration={200} className={mobNavlinkcss}>
                <Link href="/sale">Sale</Link>
              </li>
              <li duration={200} className={mobNavlinkcss}>
                <Link className={""} href="/customize">
                  Customize
                </Link>
              </li>
              <li duration={200} className={mobNavlinkcss}>
                <Link className={""} href="/gifts">
                  Gifts 🎁
                </Link>
              </li>
            </div>
          </div>
          <Toaster />
        </div>
      )
      }
    </>
  );
}

export default Navbar;
