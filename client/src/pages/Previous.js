import { DarkThemeToggle, } from "flowbite-react";
import React from "react";
import Timelinecomponent from "../components/Timeline";



export default function Previouscomponent() {
  return (
    <>
      <DarkThemeToggle className="sticky top-[90vh]"></DarkThemeToggle>
      <div>
        <Timelinecomponent />
      </div>
    </>
  )
}