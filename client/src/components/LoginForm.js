import React, { useEffect } from "react";
import Newregistration from "./Newregister";
import { json, Link } from "react-router-dom";
import { Label, TextInput, Button, Modal } from 'flowbite-react';

export default function LoginForm() {
    useEffect(() => {
        function loginUser() {
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            fetch(
                `http://localhost:8000/login?phone=${phone}&password=${password}`,
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                }

            )
                .then((response) => {
                    // console.log(response);
                    if (response.status == 205) {
                        const loggedCookie = { user: phone, loggedIn: true };
                        document.cookie = JSON.stringify(loggedCookie);
                        window.location.replace('http://localhost:3000/landingPage')

                    }
                    else if (response.status == 203) {
                        alert("Incorrect Credentials Please try agian!")
                        window.location.reload()

                    }
                    else {
                        alert("User not found! Please Register")
                        window.location.reload()
                    }
                })
        }
        document.getElementById('submit-login').addEventListener('click', loginUser)
    });

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
                                <Link to="">
                                    <Button id="submit-login">
                                        Log in to your account
                                    </Button>
                                </Link>
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered?{' '}
                                <a
                                    href="/newregistration"
                                    className="text-blue-700 hover:underline dark:text-blue-500"
                                >
                                    Create account
                                </a>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        </>
    )
}