import React, {useEffect, useState} from "react";
import {ToppingCard} from "./ToppingCard";
import {Topping} from "@/lib/types";

type ToppingsListProps = {
    selectedToppings: Topping[];
    handleCheckboxCheck: (toppings: Topping) => void;
}

export const ToppingsList: React.FC<ToppingsListProps> = async ({ selectedToppings, handleCheckboxCheck}) => {
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
