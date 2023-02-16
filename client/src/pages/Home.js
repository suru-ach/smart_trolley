import { DarkThemeToggle, } from "flowbite-react";
import React from "react";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/Carousel";
import CardComponent from "../components/Card";
import FooterComponent from "../components/Footer";


export default function Home() {
    return (
        <>

            {/* <DarkThemeToggle className="sticky "></DarkThemeToggle> */}
            <div className="h-[150vh] relative w-full">
                <Navbar></Navbar>
                <DarkThemeToggle className="sticky top-[90vh]"></DarkThemeToggle>
                <CarouselComponent></CarouselComponent>
                <h2 className="text-4xl text-center m-20">Deals</h2>
                <div className="overflow-x-scroll flex">
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                    <CardComponent></CardComponent>
                </div>

                <div className="mt-10">
                    <FooterComponent></FooterComponent>

                </div>
            </div>

        </>
    )
}