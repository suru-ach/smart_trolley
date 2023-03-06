import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TextInput, Button, Label, Modal } from 'flowbite-react';
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

export default function RegisterForm() {

    const [ShowLoading, setShowLoading] = useState(false);
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [message, setMessage] = useState('');
    const [msgcolor, setMsgColor] = useState('');

    const sendValues = async (e) => {
        e.preventDefault();
        setShowLoading(true);
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

    return (
        <>
            <React.Fragment>

                <div className='bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl'>


                    <Modal
                        show={true}
                        size="md"
                        popup={true}


                    >
                        <Modal.Header className=' bg-gradient-to-r from-green-400 to-blue-500  hover:from-pink-500 hover:to-yellow-500' />
                        <form onSubmit={sendValues}>
                            <Modal.Body className=''>
                                <div className="space-y-6 px-6 pb-4 ">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
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
                                            id="Firstname"
                                            placeholder="Robert"
                                            required={false}

                                        />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="Stifen"
                                                value="Last Name"
                                            />
                                        </div>
                                        <TextInput
                                            id="Lastname"
                                            placeholder="Stifen"
                                            required={false}
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
                                            required={false}
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
                                            required={false}
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
                                            required={false}
                                            value={password} onChange={e => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full">

                                        <button type='submit'>
                                            Create account
                                        </button>

                                    </div>
                                </div>
                            </Modal.Body>
                        </form>
                    </Modal>
                </div>
                {ShowLoading && <Loadingcomponent url={"/"} emassage={"Registration complete"}></Loadingcomponent>}
            </React.Fragment>

        </>
    )
};
