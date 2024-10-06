import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export interface Product {
    _id: string;
    name: string;
    description: string;
    image: string;
    price: number;
}

export type ProductPropType = {
    product: Product;
};

export const ProductCard: React.FC<ProductPropType> = ({ product }) => {
    return (
        <Card className="border-none rounded-xl">
            <CardHeader className="flex items-center justify-center">
                <Image
                    src={product.image}
                    alt="product-image"
                    width={150}
                    height={150}
                />
            </CardHeader>
            <CardContent>
                <h2 className="font-bold text-xl">{product.name}</h2>
                <p className="mt-2">{product.description}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between mt-4">
                <p>
                    <span>From </span>
                    <span className="font-bold">₹{product.price}</span>
                </p>
                <Button className="bg-orange-200 hover:bg-orange-300 text-orange-500 px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
                    Choose
                </Button>
            </CardFooter>
        </Card>
    );
};
