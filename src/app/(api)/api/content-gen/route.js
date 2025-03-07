import { NextResponse } from "next/server"

export const POST = async (req) => {
    return NextResponse.json(
        { status: 200, }, {
        message: "Success",
        res: await req.json(),
    },
    );
}