import { Button, DarkThemeToggle, } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BillComponent from "../components/Bill";
import FooterComponent from "../components/Footer";
import Alertcomponent from "../components/Alert";
import io from 'socket.io-client';
import QRScannerComponent from "../components/QRScanner";
import axios from "axios";
const socket = io(`${process.env.REACT_APP_SERVER_URL}`);

const msgColors = {
    success: 'text-green-400',
    info: 'text-blue-400',
    error: 'text-red-400'
}
export default function Cart() {
    const [billItems, setBillItems] = useState({});
    const [alertColor, setAlertColor] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertStatus, setAlertStatus] = useState('');
    const [Ready, setReady] = useState(localStorage.getItem("cartID"));

    useEffect(() => {
        if (Ready) {
            const username = localStorage.getItem('Customer_Name');
            const cartID = localStorage.getItem('cartID');
            socket.emit('join', { cartID, username });
            socket.emit('update-cart', { cartID });
    
            socket.on('message', ({ status, data }) => {
                setAlertColor(msgColors[status]);
                setAlertStatus(status);
                setAlertMessage(data);
                setTimeout(() => {
                    setAlertMessage('');
                }, 5000);
            });
    
    
            socket.on('update-cart', (data) => {
                setBillItems(data);
            })
        }
    }, []);

    // socket emit delete item

    // socket emit checkout

    const checkOut = (e) => {
        const contact = localStorage.getItem('contact');
        const cartID = localStorage.getItem('cartID');
        socket.emit('checkout', { cartID, contact });
    }

    socket.on("connect", () => {
        console.log(socket.id); // x8WIv7-mJelg7on_ALbx
        socket.on('update-cart', (products) => {

            setBillItems(JSON.parse(products).payload)
            console.log(JSON.parse(products).payload);
        })
    });

    return (
        <>
            <QRScannerComponent></QRScannerComponent>
            {Ready && (<div className="h-full relativecolor.blue bg-East bay w-[85%] m-auto">
                <div className="w-[90%] m-auto">
                    <div className={alertMessage ? `fixed bottom-1/4 left-1/2 -translate-x-1/2 z-50 p-4 mb-4 text-sm text-blue-800 w-3/4 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400` : `hidden`} role="alert">
                        <span className={alertColor}>{alertStatus}</span>{alertMessage}
                    </div>
                    <DarkThemeToggle className="sticky top-[90vh]"></DarkThemeToggle>
                    <div className="h-full relative w-full color.blue m-auto">
                        <div className="w-[90%] m-auto">
                            {billItems.status === 'success'
                                ? <BillComponent billItems={billItems.data} />
                                : <div>Loading...</div>
                            }
                            <div className="hover:mt-2 py-5 flex justify-center">
                                <button type="button" onClick={e => checkOut(e)} className="inline-flex items-center py-3.5 px-6 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    )
}
