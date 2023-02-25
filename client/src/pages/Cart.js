import { Button, DarkThemeToggle, } from "flowbite-react";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import BillComponent from "../components/Bill";
import FooterComponent from "../components/Footer";
import { useState } from "react";
const { io } = require("socket.io-client");
const socket = io("http://localhost:5000/");
export default function Cart() {
    
    const [BillItems, setBillItems] = useState([]);

    socket.on("connect", () => {
        console.log(socket.id); // x8WIv7-mJelg7on_ALbx
        socket.on('add-product', (products) => {
            
            setBillItems(JSON.parse(products).payload)
            console.log(JSON.parse(products).payload);
        })
    });

    useEffect(()=>{
        document.getElementById('checkout-btn').addEventListener('click',()=>{
              socket.disconnect();
        })
    })
    return (
        <>
            <Navbar></Navbar>
            <DarkThemeToggle className="sticky top-[90vh]"></DarkThemeToggle>
            <div className="h-full relativecolor.blue bg-East bay w-[85%] m-auto">
                <div className="w-[90%] m-auto">
                    <BillComponent BillItems = {BillItems}></BillComponent>
                    <div className="hover:mt-2 py-5 flex justify-center">
                 <button id="checkout-btn" type="button" class="inline-flex items-center py-3.5 px-6 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Checkout
                    </button>
                    </div>
                </div>
            </div>
            <div>
                <FooterComponent></FooterComponent>
            </div>

        </>
    )
}