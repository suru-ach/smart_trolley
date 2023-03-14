import { DarkThemeToggle, } from "flowbite-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Timelinecomponent from "../components/Timeline";
import FooterComponent from "../components/Footer";
import BillTransaction from "../components/BillTransaction";

export default function Previouscomponent() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/getProducts`)
      .then(res => setData(res.data.data.bill_of_all.sort((a, b) => b.transaction_id - a.transaction_id)))
  }, []);
 
  return (
    <>
      <Navbar></Navbar>
      <DarkThemeToggle className="sticky top-[90vh]"></DarkThemeToggle>
      <div>
      {
        data.length === 0
        ? <div className="text-2xl font-bold">You don't have any transactions</div>
        : (
            data.map((bill, key) => { return <BillTransaction key={key} data={bill} />})
          )
      }
      </div>
      <FooterComponent></FooterComponent>
    </>
  )
}