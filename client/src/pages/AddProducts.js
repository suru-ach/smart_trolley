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
    const [file, setFile] = useState(null);

    const sendFile = async (e) => {
        e.preventDefault();
        if (file === null) {
            setAlertColor(msgColors.error);
            setAlertStatus('error');
            setAlertMessage('error reading file!');
        } else {
            const form = new FormData();
            form.append('fileAttr', file);
            const res = await axios.post('/api/admin/addProducts', form,
                { 
                    headers: { 'Content-type': 'multipart/form-data' }
                }
            );
            setAlertColor(msgColors.success);
            setAlertStatus('success');
            setAlertMessage('successfully added!');
            setTimeout(() => {
                setAlertMessage('');
            }, 5000);
        }
    }


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

                <hr />
                <div>
                    <p className="p-4 text-xl font-bold">Add products</p>
                    <form onSubmit={e => sendFile(e)} className="flex flex-col justify-center w-full">
                        <div className="flex flex-col md:flex-row justify-between">
                            <input type="file" onChange={e => setFile(e.target.files[0])} />
                        </div>
                        <button type="submit" className="my-6 m-auto p-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600">Upload file</button>
                    </form>
                </div>

                <hr />
                <div>
                    <p className="p-4 text-xl font-bold">Add product</p>
                    <form onSubmit={e => sendData(e)} className="flex flex-col justify-center w-full">
                        <div className="flex flex-col md:flex-row justify-between">
                            <input className="mx-2 p-4 mt-2 md:w-1/3" value={id} onChange={e => setId(e.target.value)} placeholder="set id" />
                            <input className="mx-2 p-4 mt-2 md:w-1/3" value={name} onChange={e => setName(e.target.value)} placeholder="set name" />
                            <input className="mx-2 p-4 mt-2 md:w-1/3" value={cost} onChange={e => setCost(e.target.value)} placeholder="set cost" />
                        </div>
                        <button type="submit" className="my-6 m-auto p-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600">add Product</button>
                    </form>
                </div>
            </div>
            <FooterComponent />
        </>
    )
}