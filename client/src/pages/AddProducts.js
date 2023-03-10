import { DarkThemeToggle, } from "flowbite-react";
import React, { useEffect, useState, useSyncExternalStore } from "react";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/Footer";
import axios from "axios";

const msgColors = {
    success: 'text-green-400',
    info: 'text-blue-400',
    error: 'text-red-400'
}

export default function AddProducts() {

    const [alertColor, setAlertColor] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertStatus, setAlertStatus] = useState('');
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const sendData = async (e) => {
        e.preventDefault();
        const data = {
            id: parseInt(id),
            name,
            cost: parseFloat(cost)
        };
        const res = await axios.post('/api/admin/addProduct', data);
        setId('');
        setName('');
        setCost('');
        setAlertColor(msgColors[res.data.status])
        setAlertStatus(res.data.status);
        setAlertMessage('successfully added!');
        setTimeout(() => {
            setAlertMessage('');
        }, 5000);
    }

    return (
        <>
            <Navbar />
            <div className={alertMessage ? `fixed bottom-1/4 left-1/2 -translate-x-1/2 z-50 p-4 mb-4 text-sm text-blue-800 w-3/4 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400` : `hidden`} role="alert">
                <span className={alertColor}>{alertStatus + '! '}</span>{'message: ' + alertMessage}
            </div>
            <DarkThemeToggle className="sticky top-[90vh]"></DarkThemeToggle>
            <div className="h-full relative w-full color.blue m-auto">
                <form onSubmit={e => sendData(e)}>
                    <input value={id} onChange={e => setId(e.target.value)} placeholder="set id" />
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="set name" />
                    <input value={cost} onChange={e => setCost(e.target.value)} placeholder="set cost" />
                    <button type="submit">submit</button>
                </form>
            </div>
            <FooterComponent />
        </>
    )
}