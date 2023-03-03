import { DarkThemeToggle, Tooltip} from "flowbite-react";
import { useTheme, useThemeMode, } from "flowbite-react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/Carousel";
import CardComponent from "../components/Card";
import FooterComponent from "../components/Footer";
import { Navigate } from "react-router-dom";
import Carscommponent from "../components/cars";


export default function Home() {

    return (
        <>
            <React.Fragment>
                <Navbar className="my-0"></Navbar>
                <DarkThemeToggle className="sticky top-[90vh]"></DarkThemeToggle>
                <div className={`p-0 my-0`}>

                    <CarouselComponent></CarouselComponent>
                    <div  className="text-4xl align-center text-center m-20 p-8" >
                        <Tooltip
                            content="Select any categories"
                            placement="top"
                        >
                            <h1>Shop top categories</h1>
                        </Tooltip>
                    </div>
                    <Carscommponent></Carscommponent>
                    <h2 className="text-4xl text-center mr-20 p-8">Deals</h2>
                    <div className="overflow-x-scroll flex space-x-5 ">
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
   

