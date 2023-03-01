import { Button, DarkThemeToggle, } from "flowbite-react";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import BillComponent from "../components/Bill";
import FooterComponent from "../components/Footer";
import Alertcomponent from "../components/Alert";
import socket from 'socket.io-client';

let client_socket = null;

export default function Cart() {

    useEffect(() => {
        // client_socket = socket('');
    },[]);

    return (
        <>
            <Navbar />
            <DarkThemeToggle className="sticky top-[90vh]"></DarkThemeToggle>
            <div className="h-full relative w-full color.blue m-auto">
                <div className="w-[90%] m-auto">
                    <BillComponent>

                    </BillComponent>
                    <div className="hover:mt-2 py-5 flex justify-center">
                    <button type="button" className="inline-flex items-center py-3.5 px-6 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">Checkout</button>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>
    )
}