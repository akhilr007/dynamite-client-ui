import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { Product } from "@/lib/types";
import { ProductModal } from "./ProductModal";

export type ProductPropType = {
    product: Product;
};

export const ProductCard: React.FC<ProductPropType> = ({ product }) => {
    return (
        <Card className="border-none rounded-xl">
            <CardHeader className="flex items-center justify-center">
                <Image
                    src={product.image}
                    alt={product.name}
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
                    <span className="font-bold">₹{100}</span>
                </p>

                <ProductModal product={product} />
            </CardFooter>
        </Card>
    );
};
