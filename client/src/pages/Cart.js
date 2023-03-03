import { Button, DarkThemeToggle, } from "flowbite-react";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import BillComponent from "../components/Bill";
import FooterComponent from "../components/Footer";
import { useState } from "react";
import QRScannerComponent from "../components/QRScanner";
const { io } = require("socket.io-client");
const socket = io(`${process.env.REACT_APP_SOCKET_URL}:5000`);
export default function Cart() {

    const [BillItems, setBillItems] = useState([]);

    socket.on("connect", () => {
        console.log(socket.id); // x8WIv7-mJelg7on_ALbx
        socket.on('add-product', (products) => {

            setBillItems(JSON.parse(products).payload)
            console.log(JSON.parse(products).payload);
        })
    });

    useEffect(() => {
        document.getElementById('checkout-btn').addEventListener('click', () => {
            socket.disconnect();
        })
    })
    return (
        <>
            <DarkThemeToggle className="sticky top-[90vh]"></DarkThemeToggle>
            <div className="h-full relativecolor.blue bg-East bay w-[85%] m-auto">
                <div className="w-[90%] m-auto">
                    <QRScannerComponent></QRScannerComponent>
                    <BillComponent BillItems={BillItems}></BillComponent>
                </div>
            </div>
        </>
    )
}