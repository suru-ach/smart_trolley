import React, { useEffect, useState } from "react";
import { Dropdown, Navbar, Avatar, DarkThemeToggle, Button, } from "flowbite-react";
import Loadingcomponent from "./Loading";
import '../App.css';
import logo from './user-solid.svg'

export default function NavbarComponent(props) {


    const [ShowLoading, setShowLoading] = useState(false);

    useEffect(() => {

        function userLogout() {
            setShowLoading(true)
            window.location.replace(process.env.REACT_APP_BASE_URL);
            localStorage.clear();
        }
        document.getElementById('signOut-btn').addEventListener('click', userLogout)
    })
    return (
        <>
            {/* annoucement */}
            <div>

                <div id="banner" tabindex="1"
                    class="z-50 flex justify-center w-full px-4 py-3 border border-b border-gray-200 bg-gray-50 dark:border-gray-600 lg:py-4 dark:bg-gray-700">
                    <div class="items-center md:flex">
                        <p class="text-sm font-medium text-gray-900 md:my-0 dark:text-white">
                            <span
                                class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden md:inline">New</span>
                            Our Services are now avaliable in 300 more locations
                            <a href="/blocks/"
                                class="inline-flex items-center ml-2 text-sm font-medium text-blue-600 md:ml-2 dark:text-blue-500 hover:underline">
                                Check
                                <svg class="w-4 h-4 ml-1 text-blue-600 dark:text-blue-500" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillrule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        cliprule="evenodd"></path>
                                </svg>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            {/* annoucement */}
            <nav class="bg-white border-gray-200 dark:bg-gray-900 rounded p-2">

                <div class=" grid grid-cols-3 flex items-center dark:text-white">
                    <div class="container flex flex-wrap items-center ">
                        <div class="self-center text-xl font-semibold whitespace-nowrap dark:text-white" > <h1>Smart</h1></div>

                        <div class="w-10 h-10">
                            <img src="./Images/Mypr.png" alt="click here to open" />
                        </div>
                    </div>
                    <div>
                        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                            <li class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover: duration-300 "><a href="/landingPage">HOME</a></li>
                            <li class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover: duration-300"><a href="/conatct">CONTACT</a></li>
                            <li class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover: duration-300"><a href="/about">ABOUT</a></li>
                            <li class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover: duration-300"><a href="/cart">CART</a></li>
                            <li class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover: duration-300"><a href="/previousbill">PREVIOUS BILL</a></li>
                        </ul>
                    </div>
                    <div class=" flex flex-row-reverse " >
                        <button type="button" id="user-menu-button" aria-expanded="false"
                            data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span class="sr-only">Open user menu</span>
                            <img class="w-10 h-10 rounded-full cursor-pointer" src="./Images/Mypr.png" alt="user photo" />
                        </button>
                    </div>
                </div>
                <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown">
                    <div class="px-4 py-3">
                        <span
                            class="block text-sm text-gray-900 dark:text-white">{localStorage.getItem('Customer_Name')}</span>
                        <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                            {localStorage.getItem('Email')}</span>
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">

                        <li>
                            <button id="signOut-btn"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                                out</button>
                        </li>
                    </ul>
                </div>
            </nav>

            {ShowLoading && <Loadingcomponent url={"/"} emassage={"Loging out"}></Loadingcomponent>}
        </>
    )
}