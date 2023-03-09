import { Button, DarkThemeToggle, } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BillComponent from "../components/Bill";
import FooterComponent from "../components/Footer";
import Alertcomponent from "../components/Alert";
import io from 'socket.io-client';
import QRScannerComponent from "../components/QRScanner";

const msgColors = {
    success: 'text-green-400',
    info: 'text-blue-400',
    error: 'text-red-400'
}

let socket = null;

export default function Cart() {

    const [billItems, setBillItems] = useState({});
    const [alertColor, setAlertColor] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertStatus, setAlertStatus] = useState('');
    const [deleteItem, setDeleteItem] = useState(0);

    useEffect(() => {
        socket = io('http://localhost:3000');
        
        const contact = localStorage.getItem('contact');
        const username = localStorage.getItem('username');
        
        socket.emit('join', {contact, username});
        socket.emit('get-items', { contact });
        
        socket.on('message', ({status, data}) => {
            setAlertColor(msgColors[status]);
            setAlertStatus(status);
            setAlertMessage(data);
            setTimeout(() => {
                setAlertMessage('');
            }, 5000);
        });

        socket.on('add-items', (data) => {
            setBillItems(data);
        });

        socket.on('redirect', (data) => {
            console.log(data);
            // redirect
        })

    },[]);
    
    useEffect(() => {
        const contact = localStorage.getItem('contact');
        if(socket !== null && deleteItem !== 0) {
            socket.emit('deleteItem', { contact, productID: deleteItem })
        }
    }, [deleteItem]);
    
    const checkOut = (e) => {
        const contact = localStorage.getItem('contact');
        socket.emit('bill', { contact });
    }

    return (
        <>
            <Navbar />
            {localStorage.getItem('contact') ? '' : <QRScannerComponent socket={socket} />}
            <div className={alertMessage ? `fixed bottom-1/4 left-1/2 -translate-x-1/2 z-50 p-4 mb-4 text-sm text-blue-800 w-3/4 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400`: `hidden`} role="alert">
                <span className={alertColor}>{alertStatus+'! '}</span>{'message: '+alertMessage}
            </div>
            <DarkThemeToggle className="sticky top-[90vh]"></DarkThemeToggle>
            <div className="h-full relative w-full color.blue m-auto">
                <div className="w-[90%] m-auto">
                    {billItems.status === 'success'
                    ?<BillComponent data={billItems.data} deleteItem={deleteItem} setDeleteItem={setDeleteItem} />
                    :<div>Loading...</div>
                    }
                    <div className="hover:mt-2 py-5 flex justify-center">
                    <button type="button" onClick={e => checkOut(e)} className="inline-flex items-center py-3.5 px-6 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">Checkout</button>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </>
    )
}