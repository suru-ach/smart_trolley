import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Label, Modal, TextInput, Button } from 'flowbite-react';
import axios from 'axios';
import Loadingcomponent from './Loading';

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

export default function Newregistrationcomponent({ props }) {

    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [message, setMessage] = useState('');
    const [msgcolor, setMsgColor] = useState('');
    const [ShowLoading, setShowLoading] = useState(false);
    props.setShowComponents(false);

    const sendValues = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setShowLoading(true)
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
                    props.setShowComponents(true);
                    setShowLoading(false)
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

    return (
        <>
            <React.Fragment>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl'>


                    <Modal
                        show={true}
                        size="md"
                        popup={true}


                    >

                        <Modal.Body className=''>
                            <form onSubmit={(e) => sendValues(e)}>
                                <div className="space-y-6 px-6 pb-4 ">
                                    <h3 className="text-xl text-center pt-10 font-medium text-gray-900 dark:text-white">
                                        Register to our platform
                                    </h3>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="Robert"
                                                value="First Name"
                                            />
                                        </div>
                                        <TextInput
                                            id="Username"
                                            placeholder="Robert"
                                            required={true}
                                            value={username} onChange={e => setUsername(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="Enter the number"
                                                value="Phone Number"
                                            />
                                        </div>
                                        <TextInput
                                            id="PhoneNumber"
                                            placeholder="Enter the number"
                                            required={true}
                                            value={contact} onChange={e => setContact(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="email"
                                                value="Your email"
                                            />
                                        </div>
                                        <TextInput
                                            id="email"
                                            placeholder="name@company.com"
                                            required={true}
                                            value={email} onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="password"
                                                value="Your password"
                                            />
                                        </div>
                                        <TextInput
                                            id="password"
                                            type="password"
                                            required={true}
                                            value={password} onChange={e => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-fit m-auto">
                                        <a
                                            href="/"
                                        >
                                            <button type='submit' className={`${disabled && 'cursor-not-allowed'} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8`}>Register new account</button>
                                        </a>
                                    </div>
                                </div>
                            </form>
                            <div className='mt-6 text-sm'>already have an account <Link to={'/'} className='underline text-blue-500'>login</Link></div>
                        </Modal.Body>
                    </Modal>
                </div>
                <div className={`text-sm ${msgcolor}`}>{message}</div>
                {ShowLoading && <Loadingcomponent url={"/"} emassage={"Registration complete"}></Loadingcomponent>}
            </React.Fragment>
        </>
    )
}