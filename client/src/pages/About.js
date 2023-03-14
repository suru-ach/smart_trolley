import { DarkThemeToggle, } from "flowbite-react";
import React from "react";
import Navbar from "../components/Navbar";
import Instruction from "../components/Instruction";
import Doubtcomponent from "../components/Doubt";
import FooterComponent from "../components/Footer";
export default function About() {
    return (
        <>
            <Navbar></Navbar>
            <DarkThemeToggle className="sticky top-[90vh]"></DarkThemeToggle>
            <div className="h-full relative w-full color.blue bg-East bay w-[80%] m-auto">
                <div>
                    <Instruction></Instruction>
                </div>
                <div>
                    <Doubtcomponent></Doubtcomponent>
                </div>
            </div>
            <div>
                <FooterComponent></FooterComponent>
            </div>

        </>
    )
}