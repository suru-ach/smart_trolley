import { Button, Table } from "flowbite-react";
import { useEffect, useState } from "react";

export default function BillTransaction({ data }) {

    let val = 0;
    (function() {
       data.data.forEach(item => {
            val+=item.Total;
       }) 
    })();

    return (
        <>
            {
               data.data.length === 0
               ? <div><h1>No items!</h1></div>
               :<div className="py-8">
                    <div className="flex flex-col md:flex-row md:justify-between w-full">
                        <div className="text-xl font-bold p-4">Transaction Number: {data.transaction_id}</div>
                        <div className="text-xl font-bold p-4">Date: {data.data[0].Bill_Date.slice(0,10)}</div>
                    </div>
                    <div className="md:mx-4">
                    <Table hoverable={true}>
                        <Table.Head>
                            <Table.HeadCell>
                                Product Id
                            </Table.HeadCell>
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
                        </Table.Head>
                        <Table.Body>
                            {
                                data.data.map((item, key) => {
                            return <Table.Row key={key} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {item.Product_ID}
                                </Table.Cell>
                                <Table.Cell>
                                    {item.Product_Name} 
                                </Table.Cell>
                                <Table.Cell>
                                    {item.Cost.toFixed(2)}
                                </Table.Cell>
                                <Table.Cell>
                                    {item.Quantity} 
                                </Table.Cell>
                                <Table.Cell>
                                    {item.Total.toFixed(2)} 
                                </Table.Cell>
                            </Table.Row>
                                })
                            }
                        </Table.Body>
                    </Table>
                    </div>
                    <div className="text-xl font-bold p-4">Total: {val.toFixed(2)}</div>
                </div>
            }
        </>
    )
}