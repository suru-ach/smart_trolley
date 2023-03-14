import { DarkThemeToggle, } from "flowbite-react";
import { useTheme, useThemeMode, } from "flowbite-react";
import React from "react";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/Carousel";
import CardComponent from "../components/Card";
import FooterComponent from "../components/Footer";

export default function Home() {

    return (
        <>
            <React.Fragment>
                <Navbar></Navbar>
                <DarkThemeToggle className="sticky top-[90vh]"></DarkThemeToggle>
                <div className={`w-[85%] m-auto`}>

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
                </div>

                <div className="mt-10">
                    <FooterComponent></FooterComponent>
                </div>
            </React.Fragment>
        </>
    )
}