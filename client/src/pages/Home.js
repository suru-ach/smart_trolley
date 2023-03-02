import { DarkThemeToggle, } from "flowbite-react";
import { useTheme, useThemeMode, } from "flowbite-react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/Carousel";
import CardComponent from "../components/Card";
import FooterComponent from "../components/Footer";
import { Navigate } from "react-router-dom";
import Carscommponent from "../components/cars";


export default function Home() {
    // const Loggedcookie = JSON.parse(document.cookie).loggedIn;
    // if (Loggedcookie) {

        return (
            <>
                <React.Fragment>
                    <Navbar className="my-0"></Navbar>
                    <DarkThemeToggle className="sticky top-[90vh]"></DarkThemeToggle>
                    <div className={`p-0 my-0`}>

                        <CarouselComponent></CarouselComponent>
                        <Carscommponent></Carscommponent>
                        <h2 className="text-4xl text-center m-20">Deals</h2>
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
    // else{
    //     window.location.replace("http://localhost:3000/")
    // }

