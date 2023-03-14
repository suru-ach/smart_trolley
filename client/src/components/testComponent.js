import React, { useState } from "react";
import { Button } from "flowbite-react";
import axios from 'axios';

export default function TestComponent() {

    const [cart_id, setCartId] = useState('');
    const [barcode, setBarcode] = useState('')
    const [productCode, setProductCode] = useState('')

    function submit_form(e){
        e.preventDefault();
        axios.post("http://localhost:5000/api/addproduct", {productCode,productID: barcode, cart_id});
    }

    return (
        <>
            <form onSubmit={e => submit_form(e)}>
                <label htmlFor="barcode">Barcode</label>
                <input id="cart_id" type="text" value={cart_id} onChange={e => setCartId(e.target.value)} />
                <input id="barcode" type="text" value={barcode} onChange={e => setBarcode(e.target.value)} />
                <input id="productCode" type="number" value={productCode} onChange={e => setProductCode(e.target.value)} />
                <Button type="submit">Add</Button>
            </form>
        </>
    )
}