import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { ProductCard } from "./components/ProductCard";
import { Category, Product } from "@/lib/types";

export default async function Home() {
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
        <>
            <section className="bg-white ">
                <div className="container mx-auto flex items-center justify-between py-24">
                    <div className="">
                        <h1 className="text-7xl font-black font-sans leading-2">
                            Savour Delicious Pizza in <br />
                            <span className="text-primary">
                                only 45 Minutes
                            </span>
                        </h1>
                        <p className="text-2xl mt-8 max-w-lg leading-snug">
                            Enjoy a Free Meal If Your Order Takes More Than 45
                            Minutes
                        </p>
                        <Button className="mt-8 text-lg rounded-full py-7 font-bold">
                            Get Your Pizza Now
                        </Button>
                    </div>
                    <div>
                        <Image
                            alt="pizza-image"
                            src={"/pizza-main.png"}
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            </section>
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
                            <TabsContent
                                key={category._id}
                                value={category._id}
                            >
                                <div className="grid grid-cols-4 gap-6 mt-6">
                                    {products?.data
                                        .filter(
                                            (product) =>
                                                product.categoryId ===
                                                category._id
                                        )
                                        .map((product) => (
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
        </>
    );
}
