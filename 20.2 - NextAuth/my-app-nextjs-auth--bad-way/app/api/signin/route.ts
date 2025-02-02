import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
    const { username, password } = await req.json();

    //search in database here : valid
    const userId = 1;
    const token = jwt.sign({ userId: userId}, "1234");

    return NextResponse.json({
        msg: "Hi from signin",
        token: token
    })
}