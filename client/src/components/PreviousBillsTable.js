import { Table } from "flowbite-react"
export default function (props) {
    return (
        <>
            <h2 className="text-center mt-10 rounded-sm bg-gray-900 text-white">Bill Number: {props.bill[0].Bill_No}</h2>
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
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        props.bill.map(((item, key) => {
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
                                </Table.Row>
                            )
                        }
                        ))
                    }
                </Table.Body>
            </Table >
        </>
    )
}