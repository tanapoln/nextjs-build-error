"use client";

import { handleClick } from "@/app/actions";

export function ClickComponent() {
    return (
        <button onClick={async () => handleClick()}>Click me</button>
    )
}
