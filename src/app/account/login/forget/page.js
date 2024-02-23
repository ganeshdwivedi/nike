"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

function page() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        try {
            if (email != "") {
                const response = await axios.post("/api/user/forgetpassword", {
                    email,
                });
                toast.success(response.data.message)
            } else {
                toast.error("please enter your email");
            }
        } catch (error) {
            toast.error("please enter valid email");
            console.log("error", error.message);
        }
    };


    return (
        <>
            <section className="overflow-hidden">
                <div className='md:w-[99.5vw] sm:w-[100vw] bg-cover bg-center bg-[url("https://img.freepik.com/premium-photo/beautiful-abstract-gold-blue-transparent-floral-design-background-banner-copy-space-minimalism_878783-7097.jpg?w=996")] pt-20  font-[FFDINforPumaW07-Regular-latin] relative  '>
                    <div className="m-36 sm:m-2 ">
                        <div className="mb-[-15px] p-10 flex justify-center">
                            <form
                                className="md:w-[37vw] rounded-md p-10 bg-black bg-opacity-10 backdrop-blur-[6px] sm:w-full"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                }}
                            >

                                <div className="flex flex-col justify-start items-center">
                                    <p className="text-slate-950 text-sm self-start ">
                                        Please Enter Your Email
                                    </p>
                                    <div className="flex flex-col my-3">
                                        <label className="text-sm font-bold">Email</label>
                                        <input
                                          style={{backgroundColor:'white'}}
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                            }}
                                            required
                                            className="md:w-[35vw] rounded-[25px] sm:w-full px-4 py-3 border border-solid border-black"
                                            type="email"
                                            placeholder="Enter your Email"
                                        />
                                    </div>
                                    <button
                                        onClick={handleSubmit}
                                        className="bg-slate-300 rounded-md px-[16vw] text-slate-900 py-5 font-bold"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Toaster />
            </section>
        </>
    );
}

export default page;