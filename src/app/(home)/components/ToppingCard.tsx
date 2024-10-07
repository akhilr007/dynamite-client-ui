"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

export interface Topping {
    id: string;
    name: string;
    image: string;
    price: number;
    isAvailable: boolean;
}

interface ToppingCardProps {
    selectedToppings: Topping[];
    topping: Topping;
    handleCheckboxCheck: (topping: Topping) => void;
}
export const ToppingCard: React.FC<ToppingCardProps> = ({
    topping,
    selectedToppings,
    handleCheckboxCheck
}) => {
    const isCurrentSelected = selectedToppings.some(
        (element) => element.id === topping.id
    );
    return (
        <Button
            variant="outline"
            className={cn(
                `flex flex-col h-40 relative`,
                isCurrentSelected ? "border-primary" : ""
            )}
            onClick={() => handleCheckboxCheck(topping)}
        >
            <Image
                src={topping.image}
                alt={topping.name}
                width={80}
                height={80}
            />
            <h4>{topping.name}</h4>
            <p>₹{topping.price}</p>
            {isCurrentSelected && (
                <CircleCheck className="absolute top-1 right-1 text-primary" />
            )}
        </Button>
    );
};
