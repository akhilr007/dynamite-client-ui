import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Header } from "../components/custom/header";
import { cn } from "@/lib/utils";
import StoreProvider from "./StoreProvider";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900"
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900"
});

export const metadata: Metadata = {
    title: "PizzaEats",
    description: "A delicious pizza online marketplace"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <StoreProvider>
                <body
                    className={cn(
                        `min-h-screen bg-background ${geistSans.variable} ${geistMono.variable} antialiased`
                    )}
                >
                    <Header />
                    <main>{children}</main>
                </body>
            </StoreProvider>
        </html>
    );
}
