import React, { useEffect } from "react";
import { Dropdown, Navbar, Avatar, DarkThemeToggle, Button, } from "flowbite-react";

export default function NavbarComponent(props) {
    useEffect(() => {
        function userLogout() {
            window.location.replace(process.env.REACT_APP_BASE_URL);
            localStorage.clear();
        }
        document.getElementById('signOut-btn').addEventListener('click', userLogout)
    })
    return (
        <>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/">
                    <img
                        src="./Images/Mypr.png"
                        className="mr-3 h-6 sm:h-9"
                        alt="Smart_Trolley logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Smart Trolley
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {localStorage.getItem('Customer_Name')}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {localStorage.getItem('Email')}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            <Button id="signOut-btn" className="text-center m-auto w-full">Sign out</Button>
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/landingPage"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/about">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/cart">
                        Cart<i className="fa-thin fa-cart-shopping"></i>
                    </Navbar.Link>
                    <Navbar.Link href="/previousbill">
                        Previous Bills
                    </Navbar.Link>

                </Navbar.Collapse>
            </Navbar>
        </>
    );
}