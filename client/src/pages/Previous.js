import { DarkThemeToggle, } from "flowbite-react";
import React from "react";
import Navbar from "../components/Navbar";
import Timelinecomponent from "../components/Timeline";
import FooterComponent from "../components/Footer";

export default function Previouscomponent() {
  return (
    <>
      <DarkThemeToggle className="sticky top-[90vh]"></DarkThemeToggle>
      <div>
        <Timelinecomponent></Timelinecomponent>
      </div>
    </>
  )
}