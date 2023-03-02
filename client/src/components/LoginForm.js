import React, { useEffect, useState } from "react";
import { Label, TextInput, Button, Modal } from 'flowbite-react';
import Loadingcomponent from "./Loading";

export default function LoginForm() {
    const [ShowLoading, setShowLoading] = useState(false);
    const [ShowLoadings, setShowLoadings] = useState(false);
    useEffect(() => {
        document.getElementById('submit-login').addEventListener('click', () => { setShowLoading(true) })
    }, []);
    useEffect(() => {
        document.getElementById('newreg').addEventListener('click', () => { setShowLoadings(true) })
    }, []);
    console.log(ShowLoading);
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
                                <span  id="newreg" className="text-blue-700 hover:underline dark:text-blue-500"
                                > Not registered? Create account</span>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                {ShowLoading && <Loadingcomponent url={"/landingpage"} emassage={"Getting Ready"}></Loadingcomponent>}
                {ShowLoadings && <Loadingcomponent url={"/newregistration"} emassage={"Registering form"}></Loadingcomponent>}
            </React.Fragment>
        </>
    )
}