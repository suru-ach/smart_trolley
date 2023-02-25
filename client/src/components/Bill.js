import { Button, Table } from "flowbite-react";
import { useEffect } from "react";


export default function BillComponent({BillItems}) {
    useEffect(()=>{
        document.getElementById('form').addEventListener('submit', (e)=>{
            e.preventDefault();
        })
    })
    return (
        <>
        <form id="form" method="post">
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
                                        <Button type="submit"
                                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                            name={item.Product_ID}
                                        >
                                            Delete
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                </Table.Body>
            </Table>
            </form>
        </>
    )
}