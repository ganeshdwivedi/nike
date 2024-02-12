import argon2 from "argon2"
import User from "@/model/userModel";
import connect from "@/config/dbconfig";
import { NextResponse } from "next/server";
import { generateToken } from "@/config/generateToken";


export async function POST(request) {
    await connect();
    const { email, password } = await request.json();
    console.log(email, password)
    try {
        const isExist = await User.findOne({ email: email });
        if (isExist) {
            const hashedPassword = await argon2.hash(password, {
                timeCost: 12, // Adjust based on your needs
                memoryCost: 2048, // Adjust based on your needs
                parallelism: 1, // Adjust based on your hardware
            });

            const okay = await User.findByIdAndUpdate(isExist._id, { password: hashedPassword })
            console.log(okay)
            return NextResponse.json({
                message: "Password Changed Successfully"
            });

        } else {
            return NextResponse.json({ message: "no such user find" })
        }

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}