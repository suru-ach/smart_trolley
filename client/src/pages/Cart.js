import { Button, DarkThemeToggle, } from "flowbite-react";
import React, { useEffect ,useState} from "react";
import Navbar from "../components/Navbar";
import BillComponent from "../components/Bill";
import FooterComponent from "../components/Footer";
import Alertcomponent from "../components/Alert";
export default function Cart() {
    const [ShowAlert, setShowAlert] = useState(false);
    useEffect(() => {
        document.getElementById('check-btn').addEventListener('click', () => { setShowAlert(true) })
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <DarkThemeToggle className="sticky top-[90vh]"></DarkThemeToggle>
            <div className="h-full relative w-full color.blue bg-East bay w-[85%] m-auto">
                <div className="w-[90%] m-auto">
                    <BillComponent></BillComponent>
                    <div className="hover:mt-2 py-5 flex justify-center">
                 <button id="check-btn" type="button" class="inline-flex items-center py-3.5 px-6 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Checkout
                    </button>
                    </div>
                </div>
            </div>
            <div>
                <FooterComponent></FooterComponent>
            </div>
            {ShowAlert && <Alertcomponent></Alertcomponent>}

        </>
    )
}