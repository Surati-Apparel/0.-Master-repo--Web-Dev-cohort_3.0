import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        msg: "Helllo there from catch all route.ts"
    })
}