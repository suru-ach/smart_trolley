import { Timeline } from "flowbite-react";
import { useEffect, useState } from "react";
import BillComponent from "./Bill";
import axios from "axios";

export default function Timelinecomponent() {
    const [billItems, SetBills] = useState([]);
    const contact = localStorage.getItem('contact');

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
                    if (bills_map.has(bill.Bill_No)){
                        const currentItems = bills_map.get(bill.Bill_No);
                        bills_map.set(bill.Bill_No, [...currentItems, bill])
                     }
                    else { bills_map.set(bill.Bill_No, [bill]) }
                })
                console.log(bills_map);
                // SetBills(bills_map)
            }
        })


    return (
        <>
            <Timeline>
                <Timeline.Item>
                    <Timeline.Content>
                        <Timeline.Time>
                            {billItems.Bill_No}
                        </Timeline.Time>
                        <Timeline.Title>
                            BILL
                        </Timeline.Title>
                        <Timeline.Body>
                            <BillComponent props={billItems}></BillComponent>
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        </>
    )
}