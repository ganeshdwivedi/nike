"use client";
import React, { useState } from "react";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import toast, { Toaster } from "react-hot-toast";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  const [toggle, settoggle] = useState(false);
  const Toggle = () => {
    settoggle(!toggle);
  };
  const navlinkcss =
    "text-[15px] font-medium hover:underline decoration-black decoration-2 underline-offset-8";
  const mobNavlinkcss =
    "text-[25px] font-medium hover:underline decoration-black decoration-2 underline-offset-8";

  return (
    <>
      <nav className="relative">
        <div className="flex w-full z-40 bg-white  fixed flex-row justify-between items-center  py-3 px-10">
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
                <Link className={""} href="/kid">
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

          <div className="flex flex-row gap-5">
            <div className="flex items-center justify-center flex-row rounded-[25px] bg-[#edecec]"> <SearchIcon />
              <input
                type="search"
                placeholder="search"
                className="w-28 md:block sm:hidden rounded-[25px] border-0 py-2 px-3 bg-[#edecec]"
              /></div>
            <Link href={"/wishlist"}>
              <FavoriteBorderIcon fontSize="medium" />
            </Link>

            <Link href={"/cart"}>
              <ShoppingBagOutlinedIcon />
            </Link>

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
          className="p-10 ml-20 duration-1000 delay-300 ease-in-out pt-20 fixed bg-white w-[100vw] h-[100vh]"
        >
          <div className="">
            <ul className={`flex-col flex gap-4`}>
              <li className={mobNavlinkcss}>
                <Link href="/">New & Featured</Link>
              </li>
              <li className={mobNavlinkcss}>
                <Link href={"/men"}>Men</Link>
              </li>
              <li className={mobNavlinkcss}>
                <Link className={""} href={"/women"}>
                  women
                </Link>
              </li>
              <li className={mobNavlinkcss}>
                <Link className={""} href="/kid">
                  kids
                </Link>
              </li>
              <li className={mobNavlinkcss}>
                <Link href="/sale">Sale</Link>
              </li>
              <li className={mobNavlinkcss}>
                <Link className={""} href="/customize">
                  Customize
                </Link>
              </li>
              <li className={mobNavlinkcss}>
                <Link className={""} href="/gifts">
                  Gifts 🎁
                </Link>
              </li>
            </ul >
          </div >
          <Toaster />
        </div >
      )
      }
    </>
  );
}

export default Navbar;
