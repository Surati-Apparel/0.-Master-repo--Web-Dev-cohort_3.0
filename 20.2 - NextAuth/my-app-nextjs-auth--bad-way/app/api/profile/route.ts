import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        avtar: "https://google.com/cat.png"
    })
}