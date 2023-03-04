import React, { useState } from "react";
import { Button } from "flowbite-react";
import axios from 'axios';

export default function TestComponent() {

    const [barcode, setBarcode] = useState('')
    const [productCode, setProductCode] = useState('')

    const contact = window.localStorage.getItem('contact');
    
    function submit_form(e){
        e.preventDefault();
        axios.post("http://localhost:5000/api/addProduct", {productCode,productID: barcode, contact})   
    }

    return (
        <>
            <form onSubmit={e => submit_form(e)}>
                <label htmlFor="barcode">Barcode</label>
                <input id="barcode" type="text" value={barcode} onChange={e => setBarcode(e.target.value)} />
                <input id="productCode" type="number" value={productCode} onChange={e => setProductCode(e.target.value)} />
                <Button type="submit">Add</Button>
            </form>
        </>
    )
}