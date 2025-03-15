import { NextResponse } from "next/server";
import { currentUser, auth, } from "@clerk/nextjs/server";
import { User } from "@/models/User";
import { connectDB, disconnectDB } from "@/lib/db";

export async function GET(_) {



}