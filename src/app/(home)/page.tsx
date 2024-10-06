import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

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
                    <Tabs defaultValue="pizza" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="pizza" className="text-md">
                                Pizza
                            </TabsTrigger>
                            <TabsTrigger value="beverages" className="text-md">
                                Beverages
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="pizza">Pizza list</TabsContent>
                        <TabsContent value="beverages">
                            Beverages list
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </>
    );
}
