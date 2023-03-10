import React from "react";
import { Card, Button, Rating, Badge, Dropdown, Tooltip } from "flowbite-react";

export default function Carscommponent() {
    return (
        <>
            <div class="bg-grey grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-13 md:grid-cols-2 dark:bg-gray-800  ">

                <figure class=" m-4 items-center justify-center p-8 text-center from-purple-600 to-blue-600 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md: ">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white"><a href="#">Rain Jackets</a></h3>
                </figure>

                <figure class=" m-4 items-center justify-center p-8 text-center from-purple-600 to-blue-600 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md: ">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white"><a href="#">Shoes</a></h3>
                </figure>
                <figure class=" m-4 items-center justify-center p-8 text-center from-purple-600 to-blue-600 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md: ">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white"><a href="#">Cakes</a></h3>
                </figure>
                <figure class=" m-4 items-center justify-center p-8 text-center from-purple-600 to-blue-600 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md: ">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white"><a href="#">Sleep</a></h3>
                </figure>
            </div>



        </>
    )
}