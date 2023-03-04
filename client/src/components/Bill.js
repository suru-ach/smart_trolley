import { Button, Table } from "flowbite-react";
import { useEffect } from "react";
import axios from 'axios';

export default function BillComponent({ BillItems }) {
    function handleDelete(element){
        console.log(element.id);
    }
    useEffect(() => {
        document.getElementById('checkout-btn').addEventListener('click', () => {
            axios.post(`${process.env.REACT_APP_SERVER_URL}/api/resetCart`, { cartID: localStorage.getItem('cartID') })
                .then((data) => {
                    console.log(data.data.message);
                    if(data.data.message === "Success"){
                        localStorage.clear();
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        })
        document.getElementById('form').addEventListener('submit', (e)=>{e.preventDefault()})
    })
    return (
        BillItems && (<>
            <form id="form">
                <Table hoverable={true}>
                    <Table.Head>
                        <Table.HeadCell>
                            Product name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Cost
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Quantity
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Amount
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">
                                Edit
                            </span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            BillItems.map((item, key) => {
                                console.log(item);
                                return (
                                    <Table.Row key={key} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {item.Product_Name}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {item.Cost}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {item.Quantity}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {item.Amount}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <button type="button"
                                                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                                name={item.Product_ID}
                                                id={item.Product_ID}
                                                
                                            >
                                                Delete
                                            </button>
                                        </Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>
                </Table>
            </form>
            <div className="py-5 flex justify-center">
                <button id="checkout-btn" type="button" class="inline-flex items-center py-3.5 px-6 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Checkout
                </button>
            </div>
        </>)
    )
}