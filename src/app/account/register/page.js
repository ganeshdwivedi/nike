"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export default function page() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible,setVisible] = useState(false)

    const handleSubmit = async () => {
        try {
            if (name != "" && password != "" && email != "") {
                const response = await axios.post("/api/user/register", {
                    email,
                    password,
                    name,

                });
                localStorage.setItem("token", response.data.token)
                router.push("/cart");
                toast.success("Registeration successfull.");
            } else {
                toast.error("Please enter all required fields");
            }
        } catch (error) {
            console.log("error", error.message);
            toast.error("Registeration failed.");
        }
    };

    return (
        <div className="lg:pt-20 bg-[url('https://img.freepik.com/premium-vector/polygon-abstract-polygonal-geometric-triangle-background_212889-5257.jpg?w=996')] bg-cover bg-center relative  overflow-x-clip ">
            <div className="sm:pt-20 md:mt-0  ">
                <div className="mb-[-15px] p-10 flex justify-center">
                    <form
                        className="md:w-[37vw] rounded-md p-10 bg-white bg-opacity-30 backdrop-blur-[6px] sm:w-full"
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div className="flex justify-center flex-col items-center">
                            <p className="font-bold ">Register</p>
                            <hr className="h-[2px] w-full mt-4 mb-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        </div>
                        <div className="flex flex-col justify-start items-center">
                            <p className="text-slate-700 text-sm self-start">
                                Enter your details to Register
                            </p>
                            <div className="flex flex-col my-3">
                                <label className="text-sm font-bold">Name</label>
                                <input
                                          style={{backgroundColor:'white'}}
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value)
                                            }}
                                            required
                                            className="md:w-[35vw] rounded-[25px] sm:w-full px-4 py-3 border border-solid border-black"
                                            type="name"
                                            placeholder="Enter your Name"
                                        />
                            </div>
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
                            <div className="flex flex-col my-3 text-start">
                                <label className="text-sm font-bold">password</label>
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

                            <button
                                onClick={handleSubmit}
                                className="bg-slate-300 rounded-md px-[14vw] text-slate-900 py-5 font-bold"
                            >
                                Register
                            </button>
                            <p className="text-xs m-3">
                                By logging in, I confirm that I have read and accept the Terms
                                and Conditionsand the Privacy Policy.
                            </p>
                            <Link href={"/user/login"} className="self-start">
                                Already Have an account
                                <span className="text-lg font-bold underline"> Login</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster />
        </div>
    );
}