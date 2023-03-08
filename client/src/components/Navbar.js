import React, { useEffect, useState } from "react";
import { Dropdown, Navbar, Avatar, DarkThemeToggle, Button, } from "flowbite-react";
import Loadingcomponent from "./Loading";
import '../App.css';

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
            <nav>
                <div class="logo"><img src="Images/logo.png" alt="click here to open" /></div>
                <div className="self-center">
                    <ul className="block text-center sm:flex">

                        <li><a href="/landingPage">HOME</a></li>
                        <li><a href="/conatct">CONTACT</a></li>
                        <li><a href="/about">ABOUT</a></li>
                        <li><a href="/cart">CART</a></li>
                        <li><a href="/previousbill">PREVIOUS BILL</a></li>

                    </ul>
                </div>



                <button type="button" class="flex mr-3 text-sm icon" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <span class="sr-only">Open user menu</span>
                    <img className="w-5 h-5" src={process.env.PUBLIC_URL + '/Images/user-solid.svg'} alt="user photo" />
                </button>

                <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown">
                    <div class="px-4 py-3">
                        <span class="block text-sm text-gray-900 dark:text-white">{localStorage.getItem('Customer_Name')}</span>
                        <span
                            class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">  {localStorage.getItem('Email')}</span>
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">

                        <li>
                            <button

                                id="signOut-btn" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                                out</button>
                        </li>
                    </ul>
                </div>
            </nav>
            {ShowLoading && <Loadingcomponent url={"/"} emassage={"Loging out"}></Loadingcomponent>}
        </>
    );
}