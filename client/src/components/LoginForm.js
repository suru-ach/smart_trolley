import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const msgColors = {
    success: 'text-green-500',
    info: 'text-blue-500',
    error: 'text-red-500'
}

const setLocalStorage = (data) => {
    for(const key in data) {
        window.localStorage.setItem(key, data[key]);
    }
}

export default function LoginForm() {

    const [contact, setContact] = useState('1212345679');
    const [password, setPassword] = useState('password');
    const [disabled, setDisabled] = useState(false);
    const [message, setMessage] = useState('');
    const [msgcolor, setMsgColor] = useState('');

    const sendValues = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setMessage('loading...');

        try {
            const data = await axios.post('/api/signin',{ contact, password });
            if(data.status === 200) {
                setMsgColor(msgColors.success);
                setMessage(data.data.data);
                setLocalStorage(data.data.userInfo);
                setPassword('');
                setContact('');
                setTimeout(() => {
                    setMessage('');
                    setDisabled(false);
                    window.location = '/cart';
                }, 1000);
            }
        } catch(err) {
            setMsgColor(msgColors.error);
            setMessage(err.response.data.data);
            setTimeout(() => {
                setDisabled(false);
                setMessage('');
            }, 2000);
        }
        
    }
    
    return (
        <>
            <div className='bg-slate-200 w-full h-screen flex justify-center'>
                <div className='bg-white p-12 w-full sm:w-1/2 sm:my-12 md:max-w-[500px]'>
                    <div className='text-xl font-bold'>Login Form</div>
                    <form className='flex flex-col justify-center h-full' onSubmit={(e) => sendValues(e)}>
                        <div className='mb-6 mt-4'>
                            <label htmlFor='phone' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your phone number</label>
                            <input type='tel' value={contact} onChange={e => setContact(e.target.value)} id='phone' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' required />
                        </div>
                        <div className='mb-6 mt-4'>
                            <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your password</label>
                            <input type='password' value={password} onChange={e => setPassword(e.target.value)} id='password' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' required />
                        </div>
                        <div className={`text-sm ${msgcolor}`}>{message}</div>
                        <button type='submit' className={`${disabled && 'cursor-not-allowed'} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8`}>Register new account</button>
                        <div className='mt-6 text-sm'>don't have an account <Link to={'/register'} className='underline text-blue-500'>register</Link></div>
                    </form>
                </div>
            </div>

        </>
    )
}