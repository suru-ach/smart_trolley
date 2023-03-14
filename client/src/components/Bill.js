import { Button, Table } from "flowbite-react";
import { useEffect, useState } from "react";

export default function BillComponent({ deleteItem, data, setDeleteItem }) {

    const [billItems, setBillItems] = useState([]);

    useEffect(() => {
        setBillItems((prevState) => {
            return prevState.filter(item => item.Product_ID !== deleteItem);
        })
    }, [deleteItem]);

    useEffect(() => {
        const quantity_map = new Map();
        const updateItems = data.filter((billItem) => {
            if (quantity_map.has(billItem.Product_ID)) {
                quantity_map.set(billItem.Product_ID, quantity_map.get(billItem.Product_ID) + 1);
                return false;
            }
            quantity_map.set(billItem.Product_ID, 1);
            billItem.Quantity = 1;
            return true;
        });
        updateItems.forEach(item => item.Quantity = quantity_map.get(item.Product_ID));
        setBillItems(updateItems);
    }, []);

    return (
        <>
            {
                billItems.length === 0
                    ? <div><h1>No items!</h1></div>
                    : <Table hoverable={true}>
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
                                Delete
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                            {
                                billItems.map((item, key) => {
                                    return (
                                        <Table.Row key={key} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {item.Product_Name}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {(item.Cost).toFixed(2)}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {item.Quantity}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {(item.Quantity * item.Cost).toFixed(2)}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <button
                                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                                    value={item.Product_ID}
                                                    onClick={e => setDeleteItem(parseInt(e.target.value))}
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
            }
        </>
    )
}