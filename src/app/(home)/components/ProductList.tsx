import React from "react";
import { ProductCard } from "./ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Category, Product } from "@/lib/types";

export const ProductList = async () => {
    const categoryResponse = await fetch(
        `${process.env.BACKEND_URL}/api/v1/categories`,
        {
            next: {
                revalidate: 3600
            }
        }
    );

    if (!categoryResponse.ok) {
        throw new Error("Failed to fetch Category");
    }

    const categories = await categoryResponse.json();

    // todo: add pagination
    // todo: add dynamic tenant id
    const productsResponse = await fetch(
        `${process.env.BACKEND_URL}/api/v1/products?perPage=100&tenantId=4`,
        {
            next: {
                revalidate: 3600
            }
        }
    );

    if (!productsResponse.ok) {
        throw new Error("Failed to fetch Products");
    }

    const products: { data: Product[] } = await productsResponse.json();
    return (
        <section>
            <div className="container py-12 mx-auto">
                <Tabs defaultValue={categories[0]._id}>
                    <TabsList>
                        {categories.map((category: Category) => (
                            <TabsTrigger
                                key={category._id}
                                value={category._id}
                                className="text-md"
                            >
                                {category.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {categories.map((category: Category) => (
                        <TabsContent key={category._id} value={category._id}>
                            <div className="grid grid-cols-4 gap-6 mt-6">
                                {products?.data
                                    .filter(
                                        (product: Product) =>
                                            product.categoryId === category._id
                                    )
                                    .map((product: Product) => (
                                        <ProductCard
                                            product={product}
                                            key={product._id}
                                        />
                                    ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};
