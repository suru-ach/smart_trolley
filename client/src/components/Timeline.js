import { Timeline, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
import PreviousBillsTable from "./PreviousBillsTable";

export default function Timelinecomponent() {
    const [billItems, SetBills] = useState([]);
    const contact = localStorage.getItem('contact');

    useEffect(() => {
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_SERVER_URL}/api/previousBills`,
            params: { contact }
        })
            .then(data => {
                if (data.data.message === "success") {
                    var all_bills = data.data.data;
                    var bills_map = new Map();
                    all_bills.map((bill) => {
                        if (bills_map.has(bill.Bill_No)) {
                            const currentItems = bills_map.get(bill.Bill_No);
                            bills_map.set(bill.Bill_No, [...currentItems, bill])
                        }
                        else { bills_map.set(bill.Bill_No, [bill]) }
                    })
                    var results = []
                    bills_map.forEach((bill) => {
                        results.push(
                            <PreviousBillsTable bill = {bill}></PreviousBillsTable>
                        )
                    })

                    SetBills(results);
                }
            })

    }, [])

    return (
        <>
            <div className="container m-auto">
                <Timeline>
                    <Timeline.Item>
                        <Timeline.Content>
                            <Timeline.Time>
                                {/* {billItems.Bill_No} */}
                            </Timeline.Time>
                            <Timeline.Title className="">
                                PERVIOUS BILLS
                            </Timeline.Title>
                            <Timeline.Body>
                                {billItems}
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>
            </div>

        </>
    )
}