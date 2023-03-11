import React, { useEffect, useState } from "react";
import { Dropdown, Navbar, Avatar, DarkThemeToggle, Button, } from "flowbite-react";
import Loadingcomponent from "./Loading";
import '../App.css';
import { NavLink } from "react-router-dom";

export default function NavbarComponent(props) {

    console.log(window.location.href)
    const [ShowLoading, setShowLoading] = useState(false);

    function userLogout() {
        setShowLoading(true)
        window.location.replace(process.env.REACT_APP_BASE_URL);
        localStorage.clear();
    }
    useEffect(() => {
        document.getElementById('signOut-btn').addEventListener('click', userLogout)

    })
    return (
        <>
           

                <Navbar
                    fluid={true}
                    rounded={true}
                    className="bg-inherit"
                   
                >
                    <Navbar.Brand href="#">
                        <img
                            src="./Images/logo.png"
                            className="mr-3 h-6 sm:h-9"
                            alt="Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            Smart Trolley
                        </span>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={<Avatar alt="User settings" img="./Images/user-solid.svg" rounded={true} />}
                        >
                            <Dropdown.Header>
                                <span className="block text-sm text-black">
                                    {localStorage.getItem('Customer_Name')}
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    {localStorage.getItem('Email')}
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item>
                                Home
                            </Dropdown.Item>
                            <Dropdown.Item>
                                About
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>
                                <button id="signOut-btn"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                                    out</button>
                            </Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>

                    <Navbar.Collapse>
                    <Navbar.Link
                            href="/about"
                            className="text-black font-bold">
                            Home
                            </Navbar.Link>
                        <Navbar.Link
                            href="/about"
                            className="text-black font-bold"
                          >
                            About
                        </Navbar.Link>
                        <Navbar.Link
                            href="/Cart"
                            className="text-black font-bold"
                            >
                            Cart
                        </Navbar.Link>
                        <Navbar.Link
                            href="previousbills"
                            className="text-black font-bold"
                            >
                            Previous Bills
                        </Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>

            
            {ShowLoading && <Loadingcomponent url={"/"} emassage={"Loging out"}></Loadingcomponent>}
        </>
    );
}