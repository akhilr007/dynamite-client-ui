import React, { startTransition, useEffect, useState } from "react";
import { ToppingCard } from "./ToppingCard";
import { Topping } from "@/lib/types";

// const toppings = [
//     {
//         id: "1",
//         name: "Chicken",
//         image: "/chicken.png",
//         price: 50,
//         isAvailable: true
//     },
//     {
//         id: "2",
//         name: "Jelapeno",
//         image: "/jelapeno.png",
//         price: 50,
//         isAvailable: true
//     },
//     {
//         id: "3",
//         name: "Cheese",
//         image: "/cheese.png",
//         price: 50,
//         isAvailable: true
//     }
// ];

export const ToppingsList = async () => {
    const [toppings, setToppings] = useState<Topping[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const toppingsResponse = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/toppings?tenantId=4`
            );

            const toppingsData = await toppingsResponse.json();
            setToppings(toppingsData);
        };
        fetchData();
    }, []);

    const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
    const handleCheckboxCheck = (topping: Topping) => {
        const isAlreadyExists = selectedToppings.some(
            (element) => element._id === topping._id
        );

        startTransition(() => {
            if (isAlreadyExists) {
                setSelectedToppings((prev) =>
                    prev.filter((element) => element._id !== topping._id)
                );
                return;
            }

            setSelectedToppings((prev) => [...prev, topping]);
        });
    };
    return (
        <section className="mt-6">
            <h4>Extra Toppings</h4>
            <div className="grid grid-cols-3 gap-4 mt-2">
                {toppings.map((topping: Topping) => (
                    <ToppingCard
                        key={topping._id}
                        topping={topping}
                        selectedToppings={selectedToppings}
                        handleCheckboxCheck={handleCheckboxCheck}
                    />
                ))}
            </div>
        </section>
    );
};
