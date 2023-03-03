import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { json, Link } from "react-router-dom";
import { Label, TextInput, Button, Modal, Spinner } from "flowbite-react";
function myURL(url) {
     window.location.href =url
}


export default function Loadingcomponent({ url, emassage }) {
    useEffect(() => {
        
        setTimeout(myURL(url), 50000);

        // setInterval(() => {
        //     setCount((count) => count +1);
        // }, 100  );
        // console.log(count)

        // if (count <= 100) {
        //     window.location.replace("/landingPage");
        // }
        
        document.getElementById("writters").innerText= emassage;


    }, []);




    return (

        <>

            <React.Fragment>
                <Modal
                    show={true}
                    size="md"
                    popup={true}

                >
                    <Modal.Body className="pt-10  ">
                        <Modal.Body >
                            <div className="grid grid-cols-2 place-content-center">

                                <span id="writters"  class=" text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 justify-center"><script>
                                    
                                    
                                    </script></span>
                                <div className="place-self-center">
                                    <Spinner
                                        aria-label="Extra large spinner example"
                                        size="xl"
                                    />

                                </div>

                            </div>
                        </Modal.Body>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        </>
    )
}