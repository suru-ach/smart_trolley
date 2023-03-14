import { Carousel } from "flowbite-react"

export default function CarouselComponent() {
    return (
        <>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                       <img src="./Images/logo.jpg"></img>
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src="./Images/shopping.jpg"></img>
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <img src="./logo192.png"></img>
                    </div>
                </Carousel>
            </div>
        </>
    )
}