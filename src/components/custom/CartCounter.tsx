"use client";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import React from "react";

export const CartCounter = () => {
    return (
        <div className="relative">
            <Link className="hover:text-primary" href={"/cart"}>
                <ShoppingBasket />
            </Link>
            <span className="absolute -top-4 -right-4 h-6 w-6 flex items-center justify-center rounded-full bg-primary font-semibold text-white">
                5
            </span>
        </div>
    );
};
