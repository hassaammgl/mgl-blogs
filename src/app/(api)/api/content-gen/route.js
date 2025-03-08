import { NextResponse } from "next/server";
import { getFromAi } from "@/actions/ai.action"

export const POST = async (req) => {

    const { prompt } = await req.json();

    console.log(prompt);

    const res=await getFromAi(prompt);

    console.log(res)

    return NextResponse.json(
        {
            message: "Success",
        },
        { status: 200, },
    );
}