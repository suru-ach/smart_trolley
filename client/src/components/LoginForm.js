import React, { useState, useEffect} from 'react';
import {Modal,Label,TextInput,Button } from 'flowbite-react';
import axios from 'axios';
import Loadingcomponent from './Loading';


const msgColors = {
    success: 'text-green-500',
    info: 'text-blue-500',
    error: 'text-red-500'
}

export default function LoginForm({props}) {
    const[Disabled,setDisabled]=useState(false)
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [ShowLoading, setShowLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [msgcolor, setMsgColor] = useState('');
    props.setShowComponents(false);

    
const setLocalStorage = (data) => {
    for (const key in data) {
        window.localStorage.setItem(key, data[key]);
    }
}
    const sendValues = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setMessage('loading...');
        try {
            const data = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/signin`, { contact, password });
            if (data.status === 200) {
                setLocalStorage(data.data.userInfo);
                setPassword('');
                setContact('');

                    props.setShowComponents(true)
                    window.location = '/landingpage';
    
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
                <Modal
                    show={true}
                    size="md"
                    popup={true}

                >
                    <Modal.Body className="pt-10">
                        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                            <h3 className="text-3xl text-gray-900 dark:text-white text-center">
                                Sign in
                            </h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="phone"
                                        value="Your email"
                                    />
                                </div>
                                <TextInput
                                    id="phone"
                                    placeholder="Phone Number"
                                    required={true}
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
                                />
                            </div>
                            <div className="flex justify-between">
                                <a 
                                    href="/modal"
                                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                                >
                                    Lost Password?
                                </a>
                            </div>
                            <div className="w-full">
                                <Button id="submit-login">
                                    Log in to your account
                                </Button>
                            </div>
                            <div  className="text-sm font-medium text-gray-500 dark:text-gray-300" >
                                <a href="/" id="newreg" className="text-blue-700 hover:underline dark:text-blue-500"
                                > Not registered? Create account</a>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                {ShowLoading && <Loadingcomponent url={"/landingpage"} emassage={"Getting Ready"}></Loadingcomponent>}
            </React.Fragment>
        </>
    )
}
