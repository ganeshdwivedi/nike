import React from "react";
import ReviewProduct from "@/components/ReviewProduct";

function page({ params }) {
    return (
        <div>
            <ReviewProduct params={params} />
        </div>
    );
}

export default page;
