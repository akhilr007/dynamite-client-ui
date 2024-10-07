"use client";
import React, { useState } from "react";
import { Topping, ToppingCard } from "./ToppingCard";

const toppings = [
    {
        id: "1",
        name: "Chicken",
        image: "/chicken.png",
        price: 50,
        isAvailable: true
    },
    {
        id: "2",
        name: "Jelapeno",
        image: "/jelapeno.png",
        price: 50,
        isAvailable: true
    },
    {
        id: "3",
        name: "Cheese",
        image: "/cheese.png",
        price: 50,
        isAvailable: true
    }
];

export const ToppingsList = () => {
    const [selectedToppings, setSelectedToppings] = useState([toppings[0]]);
    const handleCheckboxCheck = (topping: Topping) => {
        const isAlreadyExists = selectedToppings.some(
            (element) => element.id === topping.id
        );
        if (isAlreadyExists) {
            setSelectedToppings((prev) =>
                prev.filter((element) => element.id !== topping.id)
            );
            return;
        }

        setSelectedToppings((prev) => [...prev, topping]);
    };
    return (
        <section className="mt-6">
            <h4>Extra Toppings</h4>
            <div className="grid grid-cols-3 gap-4 mt-2">
                {toppings.map((topping) => (
                    <ToppingCard
                        key={topping.id}
                        topping={topping}
                        selectedToppings={selectedToppings}
                        handleCheckboxCheck={handleCheckboxCheck}
                    />
                ))}
            </div>
        </section>
    );
};
