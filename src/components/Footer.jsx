"use client"
import React, { useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const [help, sethelp] = useState(false);
  const [nike, setnike] = useState(false);
  const toggleHelp = () => {
    sethelp(!help)
  }
  const toggleNike = () => {
    setnike(!nike)
  }
  return (
    <div className="overflow-hidden">
      <div className="flex sm:flex-col md:flex-row justify-between bg-black text-white p-10">
        <div className="flex md:my-0 sm:my-6 flex-col text-xs font-bold gap-3">
          <p className="uppercase">Find a store</p>
          <p className="uppercase">become a member</p>
          <p className="uppercase">Send us feedback</p>
        </div>
        <hr className="md:hidden sm:block" />
        <div className="flex my-3 flex-col gap-3">
          <p onClick={toggleHelp} className="uppercase sm:block md:hidden text-xs font-bold">Get Help</p>
          <p className="uppercase md:block sm:hidden text-xs font-bold">Get Help</p>
          <div className="sm:hidden md:block"><p className="text-xs text-slate-400">Order Status</p>
            <p className="text-xs my-2 text-slate-400">Delivery</p>
            <p className="text-xs my-2 text-slate-400">Returns</p>
            <p className="text-xs my-2 text-slate-400">Payment Options</p>
            <p className="text-xs my-2 text-slate-400">
              Contact Us on Nike.com Inqueries
            </p>
            <p className="text-xs text-slate-400">
              Contact us on all other Inqueries
            </p></div>
          {help ? <div className="sm:my-3 md:block"><p className="text-xs text-slate-400">Order Status</p>
            <p className="text-xs my-2 text-slate-400">Delivery</p>
            <p className="text-xs my-2 text-slate-400">Returns</p>
            <p className="text-xs my-2 text-slate-400">Payment Options</p>
            <p className="text-xs my-2 text-slate-400">
              Contact Us on Nike.com Inqueries
            </p>
            <p className="text-xs text-slate-400">
              Contact us on all other Inqueries
            </p></div> : ""}
        </div>
        <div className="flex md:my-0 sm:my-6 flex-col gap-3">
          <p className="uppercase md:block sm:hidden text-xs font-bold">About Nike</p>
          <p onClick={toggleNike} className="uppercase sm:block md:hidden text-xs font-bold">About Nike</p>
          <div className="md:block sm:hidden">
            <p className="text-xs my-2 text-slate-400">News</p>
            <p className="text-xs my-2 text-slate-400">Careers</p>
            <p className="text-xs my-2 text-slate-400">Investors</p>
            <p className="text-xs my-2 text-slate-400">Sustainability</p></div>
          {nike ? <div className="">
            <p className="text-xs my-2 text-slate-400">News</p>
            <p className="text-xs my-2 text-slate-400">Careers</p>
            <p className="text-xs my-2 text-slate-400">Investors</p>
            <p className="text-xs my-2 text-slate-400">Sustainability</p></div> : ""}
        </div>
        <div className="flex flex-row ">
          <div className="my-4 mx-4">
            <YouTubeIcon fontSize="medium" />
          </div>
          <div className="my-4 mx-4">
            <TwitterIcon fontSize="medium" />
          </div>
          <div className="my-4 mx-4">
            <InstagramIcon fontSize="medium" />
          </div>
          <div className="my-4 mx-4">
            <FacebookIcon fontSize="medium" />
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col md:flex-row justify-between px-10 py-2 bg-black text-white">
        <div className="flex sm:flex-col my-3 md:flex-row gap-5 text-xs ">
          <p>
            <LocationOnIcon fontSize="small" />
            India
          </p>
          <p className="text-slate-400">
            © 2023 Nike, Inc. All Rights Reserved
          </p>
        </div>
        <div className="flex my-3 sm:flex-col md:flex-row gap-5 text-xs text-slate-400">
          <p>Guides</p>
          <p>Terms of Sale</p>
          <p>Terms of Use</p>
          <p>Nike Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
