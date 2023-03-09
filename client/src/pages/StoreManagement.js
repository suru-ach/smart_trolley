import { Navbar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import FooterComponent from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import axios from "axios";

export default function StoreManagement() {
    const [AllProducts, setAllProducts] = useState([]);
    const [ShowSingleForm, setShowSingleForm] = useState(false);
    const [ShowBulkForm, setShowBulkForm] = useState(false);
    const [Product_ID, setProduct_ID] = useState("");
    const [Product_Name, setProduct_Name] = useState("");
    const [Cost, setCost] = useState("");
    const [ProductFile, setProductFile] = useState();
    const [Message, setMessage] = useState("");


    const showProducts = () => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/getAllProducts`)
            .then(data => { setAllProducts(data.data.data) })
            .catch(e => { console.log("An Error Occurred!"); })
    }


    const addSingleProduct = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/addSingleProduct`, { Product_ID, Product_Name, Cost })
            .then((data) => {
                if (data.data.message === "success") {
                    setAllProducts(data.data.data)
                }
                setMessage(data.data.message)
                setTimeout(() => {
                    setMessage("")
                }, 5000);
            })
    }

    const addMultipleProducts = (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append('productsFile', ProductFile);
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_SERVER_URL}/api/addMultipleProducts`,
            data: fd,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        )
            .then(() => {
                setMessage("Product Added")
                setTimeout(() => {
                    setMessage("")
                }, 5000);
            })
    }

    useEffect(() => {
        document.getElementById('ShowSingleForm').addEventListener('click', () => { setShowSingleForm(!ShowSingleForm); setShowBulkForm(false) })
        document.getElementById('ShowBulkForm').addEventListener('click', () => { setShowBulkForm(!ShowBulkForm); setShowSingleForm(false) })
    })
    return (
        <>

            <button id="ShowSingleForm" type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Add Single Product</button>
            <button id="ShowBulkForm" type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Add Products in Bulk</button>
            <button id="ShowBulkForm" type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={showProducts}>Show All Products</button>

            {/* Single Product Form */}
            <form onSubmit={addSingleProduct} id="singleFrom" className={`${ShowSingleForm ? `` : `hidden`} m-5`}>

                <div class="mb-6">
                    <label for="ProductID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product ID</label>
                    <input onChange={(e) => { setProduct_ID(e.target.value) }} type="text" id="ProductID" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                </div>
                <div class="mb-6">
                    <label for="ProductName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                    <input onChange={(e) => { setProduct_Name(e.target.value) }} type="text" id="ProductName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                </div>
                <div class="mb-6">
                    <label for="Price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <input onChange={(e) => { setCost(e.target.value) }} type="text" id="Price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                </div>


                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

            {/* Multiple Product Form */}

            <form onSubmit={addMultipleProducts} id="bulkForm" className={`${ShowBulkForm ? `` : `hidden`} m-5`}>
                <label for={"productsFile"}>Choose file</label>
                <input onChange={(e) => { setProductFile(e.target.files[0]) }} className="mx-5" type={"file"} name={"productsFile"} id={"productsFile"}></input>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

            <div class="relative w-[80%] m-auto overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                Serial Number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product ID
                            </th>
                            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                Product Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {AllProducts.map(product => (<tr class="border-b border-gray-200 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {product.Sl_No}
                            </th>
                            <td class="px-6 py-4">
                                {product.Product_ID}
                            </td>
                            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                {product.Product_Name}
                            </td>
                            <td class="px-6 py-4">
                                {product.Cost}
                            </td>
                            <td class="px-6 py-4 text-right">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>

                        </tr>))
                        }

                    </tbody>
                </table>
            </div>

            {Message && <h2>{Message}</h2>}
        </>
    )
}