import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <section class="bg-white w-[100vw] h-[100vh] flex items-center dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 text-white">404</h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                    <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <Link href="/" class="inline-flex text-white  border border-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-white hover:text-gray-900 transition-colors my-4">Back to Homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default page;