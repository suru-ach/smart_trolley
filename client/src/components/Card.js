import { Card } from "flowbite-react";

export default function CardComponent() {
    return (
        <>
            <div className=" lg:mx-24 sm:mx-10  h-15 w-15">
                <Card
                    horizontal={true}
                    imgSrc="./Images/deals.png" 
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Fire Deals
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Who else wants to look great on the beach this summer? For 24 hours, our VIP text subscribers can get 15% off all home gym equipment.
                    </p>
                </Card>
            </div>
        </>
    )
}