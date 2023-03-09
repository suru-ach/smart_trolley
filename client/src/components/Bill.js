import { Button, Table } from "flowbite-react";
import { useEffect, useState } from "react";

export default function BillComponent(props) {
    const [billItems, setBillItems] = useState([]);
    const [deleteItem, setDeleteItem] = useState('');

    useEffect(() => {
        setBillItems(props.billItems);
    },);

    useEffect(()=>{
        console.log(deleteItem);
    },[deleteItem]);

    return (
        <>
        <form>
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
                        billItems.length === 0
                        ? <div>empty</div>
                        :billItems.map((item, key) => {
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
                                            onClick={e => setDeleteItem(e.target.name)}>
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