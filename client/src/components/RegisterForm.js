import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import { Label, TextInput, Checkbox, Button, Modal, DarkThemeToggle, Flowbite } from 'flowbite-react';
import Loadingcomponent from './Loading';
import axios from 'axios';

const msgColors = {
    success: 'text-green-400',
    info: 'text-blue-400',
    error: 'text-red-400'
}

const setLocalStorage = (data) => {
    for (const key in data) {
        window.localStorage.setItem(key, data[key]);
    }
}

export default function RegisterForm() {

    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [message, setMessage] = useState('');
    const [msgcolor, setMsgColor] = useState('');
    const [ShowLoading, setShowLoading] = useState(false);

    const sendValues = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setMessage('loading...');

        try {
            const data = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/signup`, { contact, password, email, username });
            if (data.status === 201) {
                setMsgColor(msgColors.success);
                setMessage(data.data.data);
                setLocalStorage(data.data.userInfo);
                setPassword('');
                setContact('');
                setEmail('');
                setUsername('');
                setTimeout(() => {
                    setMessage('');
                    setDisabled(false);
                    window.location = '/landingpage';
                }, 1000);
            }
        } catch (err) {
            setMsgColor(msgColors.error);
            setMessage(err.response.data.data);
            setTimeout(() => {
                setDisabled(false);
                setMessage('');
            }, 2000);
        }

    }
    useEffect(() => {
        document.getElementById('submit-form').addEventListener('click', () => { setShowLoading(true) })
    }, []);

    return (
        <>
            <div className='bg-slate-200 w-full flex justify-center'>
                <div className='bg-white p-12 w-full sm:w-1/2 sm:my-12 md:max-w-[500px]'>
                    <div className='text-xl font-bold'>Register Form</div>
                    <form className='flex flex-col justify-center h-full' onSubmit={(e) => sendValues(e)}>
                        <div className='mb-6 mt-4'>
                            <label htmlFor='phone' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your phone number</label>
                            <input type='tel' value={contact} onChange={e => setContact(e.target.value)} id='phone' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' required />
                        </div>
                        <div className='mb-6 mt-4'>
                            <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your email address</label>
                            <input type='email' value={email} onChange={e => setEmail(e.target.value)} id='email' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' placeholder='user@gmail.com' required />
                        </div>
                        <div className='mb-6 mt-4'>
                            <label htmlFor='username' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your username</label>
                            <input type='text' value={username} onChange={e => setUsername(e.target.value)} id='phone' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' required />
                        </div>
                        <div className='mb-6 mt-4'>
                            <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your password</label>
                            <input type='password' value={password} onChange={e => setPassword(e.target.value)} id='' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' required />
                        </div>
                        <div className={`text-sm ${msgcolor}`}>{message}</div>
                        <button type='submit' className={`${disabled && 'cursor-not-allowed'} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8`}>Register new account</button>
                        <div className='mt-6 text-sm'>already have an account <Link to={'/'} className='underline text-blue-500'>login</Link></div>
                    </form>
                </div>
            </div>

        </>
    )
};
