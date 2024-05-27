"use server"

import { withoutAuth } from "@/server/helper"

export const handleClick = withoutAuth(async () => {
    console.log("Clicked");
});
