import React from "react";

const HeroAfter = () => {
    return (
        <div className="flex z-0 flex-col md:flex-row p-5 overflow-hidden">

            <div className="w-[50vw] mx-2 h-full relative overflow-hidden">
                <img className="w-full h-full" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_700,c_limit/1d90ad38-12ec-4fda-a571-610e9e68ed89/nike-just-do-it.png" alt="" />
                <div className="m-6 absolute top-[75%] inset-0">
                    <p>Dropping This Week on the Nike App</p>
                    <p>Ja 1 "Christmas" EP</p>
                    <button className="rounded-[25px] my-3 bg-black text-white py-2 px-5">
                        Get it first
                    </button>
                </div>
            </div>


            <div className="w-[50vw] mx-2 h-[93%] relative overflow-hidden">
                <img className="w-full h-[93%]" src="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/2955113a-ada1-4dff-bb5a-a60ac84cf8ad/image.jpg" alt="" />
                <div className="absolute inset-0 top-[75%] m-5">
                    <p className="text-white">Look Back on 2023</p>
                    <button className="rounded-[25px] mx-0 my-3 bg-white text-black py-2 px-5">
                        Get it first
                    </button>
                </div>
            </div>

        </div>

    );
};

export default HeroAfter;
