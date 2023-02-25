import React from 'react';
import { Link } from "react-router-dom";
import { Label, TextInput, Checkbox, Button, Modal, DarkThemeToggle, Flowbite } from 'flowbite-react';

export default function Newregistrationcomponent() {
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
                                        required={true}
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
                                        required={true}
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
                                <div className="w-full">
                                <a
                                    href="/"
                                >
                                    <Button>
                                        Create account
                                    </Button>
                                    </a>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </React.Fragment>
        </>
    )
}