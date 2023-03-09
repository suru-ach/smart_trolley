import { DarkThemeToggle, Tooltip } from "flowbite-react";
import { useTheme, useThemeMode, } from "flowbite-react";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/Carousel";
import CardComponent from "../components/Card";
import FooterComponent from "../components/Footer";
import Carscommponent from "../components/cars";
import Aos from "aos";
import 'aos/dist/aos.css'




export default function Home() {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <>

            <React.Fragment>

                <DarkThemeToggle className="sticky top-[90vh]"></DarkThemeToggle>
                <div className={`p-0 my-0`}>
                    <div data-aos="fade-up">
                        <CarouselComponent></CarouselComponent>
                    </div>
                    <div className="text-4xl align-center text-center m-10 p-8" data-aos="fade-up" data-aos-delay="100">
                        <Tooltip
                            content="Select any categories"
                            placement="top"
                        >
                            <h1 className="text center focus:outline-none focus:ring focus:ring-violet-300 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:">Shop top categories</h1>
                        </Tooltip>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100">
                        <Carscommponent></Carscommponent>
                        <h2 className=" my-4 text-4xl text-center focus:outline-none focus:ring focus:ring-violet-300 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:">Deals</h2>
                    </div>


                    <div className="overflow-x-scroll flex space-x-5 " data-aos="flip-left" data-aos-delay="10" >
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


