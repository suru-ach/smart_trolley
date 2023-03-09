import { Card, Timeline } from "flowbite-react";
import BillComponent from "./Bill";

export default function Timelinecomponent() {
    return (
        <>
            <Timeline>
                <Timeline.Item>
                    
                    <Timeline.Content>
                        <Timeline.Time>
                            February 2022
                        </Timeline.Time>
                        <Timeline.Title>
                            BILL
                        </Timeline.Title>
                        <Timeline.Body>
                             <BillComponent></BillComponent>
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                   
                    <Timeline.Content>
                        <Timeline.Time>
                            March 2022
                        </Timeline.Time>
                        <Timeline.Title>
                            BILL
                        </Timeline.Title>
                        <Timeline.Body>
                           <BillComponent></BillComponent>
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  
                    <Timeline.Content>
                        <Timeline.Time>
                            April 2022
                        </Timeline.Time>
                        <Timeline.Title>
                            BILL
                        </Timeline.Title>
                        <Timeline.Body>
                             <BillComponent></BillComponent>
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        </>
    )
}