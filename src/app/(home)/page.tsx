import { Button } from "@/components/ui/button";

import Image from "next/image";
import { ProductList } from "./components/ProductList";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Home() {
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

            <Suspense
                fallback={
                    <div className="flex flex-col space-y-3">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                }
            >
                <ProductList />
            </Suspense>
        </>
    );
}
