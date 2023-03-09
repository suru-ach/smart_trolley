import { DarkThemeToggle, Tooltip} from "flowbite-react";
import { useTheme, useThemeMode, } from "flowbite-react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/Carousel";
import CardComponent from "../components/Card";
import FooterComponent from "../components/Footer";
import Carscommponent from "../components/cars";


export default function Home() {

    return (
        <>
            <React.Fragment>
                
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

                    <div data-aos="fade-up" data-aos-delay="100">
                        <Carscommponent></Carscommponent>
                        <h2 className=" my-4 text-4xl text-center focus:outline-none focus:ring focus:ring-violet-300 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:">Deals</h2>
                    </div>


                    <div className="overflow-x-scroll flex space-x-4 " data-aos="flip-left" data-aos-delay="10" >

                   
                        <CardComponent></CardComponent>
                        <CardComponent></CardComponent>
                        <CardComponent></CardComponent>
                        <CardComponent></CardComponent>
                        <CardComponent></CardComponent>
                        <CardComponent></CardComponent>
                    </div>
                </div>
            </React.Fragment>
        </>
    )
}
   

