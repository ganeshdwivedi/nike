"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from 'next/navigation';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';


const page = (params) => {
    const [password, setPassword] = useState("");
    const [cfpassword, setCfPassword] = useState("");
    const router = useRouter()

    useEffect(() => {
        window.localStorage.setItem('token', params.searchParams.token);
    }, [])
    const email = params.searchParams.email;
    console.log(email)

    const handleSubmit = async () => {
        toast("wait while we recognize user");
        try {
            if (password != "" && cfpassword != "" && (cfpassword == password)) {
                const response = await axios.post("/api/user/forgetpassword/changepassword", {
                    password,
                    email
                });
                toast.success(response.data.message)
                router.push("/men");
            } else {
                toast.error("please enter your email and password");
            }
        } catch (error) {
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
                                <div className="flex justify-center flex-col items-center">
                                    <p className="font-bold ">Change Password</p>
                                    <hr className="h-[2px] w-full mt-4 mb-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                </div>
                                <div className="flex flex-col justify-start items-center">
                                    <div className="flex flex-col my-3">
                                        <label className="text-sm font-bold">Password</label>
                                        <div className="flex flex-row bg-white items-center py-[0.2rem] px-4 border border-solid border-black md:w-[35vw] rounded-[25px] sm:w-full">
                                        <input
                                        style={{backgroundColor:'white'}}
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }}
                                            required
                                            autoComplete="true"
                                            className="md:w-[95%] outline-none py-[0.6rem] border-none sm:w-full"
                                            type={visible ? 'text' : 'password'}
                                            placeholder="Enter your password"
                                        />
                                        <div onClick={()=>setVisible(!visible)}>
                                        {visible ? <IoEyeOffOutline/> : <IoEyeOutline/>}
                                        </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col my-3 text-start">
                                        <label className="text-sm font-bold">Confirm Password</label>
                                        <div className="flex flex-row bg-white items-center py-[0.2rem] px-4 border border-solid border-black md:w-[35vw] rounded-[25px] sm:w-full">
                                        <input
                                        style={{backgroundColor:'white'}}
                                            value={cfpassword}
                                            onChange={(e) => {
                                                setCfPassword(e.target.value);
                                            }}
                                            required
                                            autoComplete="true"
                                            className="md:w-[95%] outline-none py-[0.6rem] border-none sm:w-full"
                                            type={visible ? 'text' : 'password'}
                                            placeholder="Confirm password"
                                        />
                                        <div onClick={()=>setVisible(!visible)}>
                                        {visible ? <IoEyeOffOutline/> : <IoEyeOutline/>}
                                        </div>
                                        </div>
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