import React, { useState } from "react";
import { Button } from "flowbite-react";
import axios from 'axios';


export default function TestComponent() {

    const phone = window.localStorage.getItem('contact');
    console.log(phone);
    function submit_form(e){
        e.preventDefault();
        const barcode = document.getElementById('barcode').value;
        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/addToBill`, {"barcode":barcode, "phone":phone})   
    }


    return (
        <>
            <form id="form" onSubmit={submit_form}>
                <label for="barcode">Barcode</label>
                <input id="barcode" type={"text"}></input>
                <Button type="submit">Add</Button>
            </form>
        </>
    )
}