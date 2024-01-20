import argon2 from "argon2"
import User from "@/model/userModel";
import connect from "@/config/dbconfig";
import { NextResponse } from "next/server";
import { generateToken } from "@/config/generateToken";


export async function POST(request) {
    await connect();
    const { email, password } = await request.json();

    try {
        const isExist = await User.findOne({ email: email });
        if (!isExist) {
            return NextResponse.json({ message: "no such user find" })
        }
        const user = await User.findOne({ email: email });
        console.log(user);
        const valid = await argon2.verify(user.password, password);
        console.log(valid);
        if (!valid) {
            console.log("error in password");
            return NextResponse.json({ error: "Invalid password" }, { status: 400 });
        }


        return NextResponse.json({
            token: generateToken(
                user.email
            )
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}