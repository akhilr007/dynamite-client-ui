import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Product, ProductCard } from "./components/ProductCard";

const products: Product[] = [
    {
        _id: "1",
        name: "Margarita Pizza",
        description: "This is tasty pizza",
        image: "/pizza-main.png",
        price: 500
    },
    {
        _id: "2",
        name: "Margarita Pizza",
        description: "This is tasty pizza",
        image: "/pizza-main.png",
        price: 500
    },
    {
        _id: "3",
        name: "Margarita Pizza",
        description: "This is tasty pizza",
        image: "/pizza-main.png",
        price: 500
    },
    {
        _id: "4",
        name: "Margarita Pizza",
        description: "This is tasty pizza",
        image: "/pizza-main.png",
        price: 500
    }
];

export default function Home() {
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
                    <Tabs defaultValue="pizza">
                        <TabsList>
                            <TabsTrigger value="pizza" className="text-md">
                                Pizza
                            </TabsTrigger>
                            <TabsTrigger value="beverages" className="text-md">
                                Beverages
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="pizza">
                            <div className="grid grid-cols-4 gap-6 mt-6">
                                {products.map((product) => (
                                    <ProductCard
                                        product={product}
                                        key={product._id}
                                    />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="beverages">
                            <div className="grid grid-cols-4 gap-6 mt-6">
                                {products.map((product) => (
                                    <ProductCard
                                        product={product}
                                        key={product._id}
                                    />
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </>
    );
}
