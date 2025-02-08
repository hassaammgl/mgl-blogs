"use client"

import { useEffect } from "react";

export default function Template({ children }) {
    useEffect(() => { }, []);
    return (
        <>

            {children}
        </>
    );
}