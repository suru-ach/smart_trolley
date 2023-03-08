const pool = require('../database/config/db')

const assignCart = async (req, res) => {
    const { cartID, phone } = req.body;
    try {
        await pool.execute(`UPDATE cart_map SET Phone = '${phone}' WHERE Cart_No = '${cartID}'`);
        const lastEntry = await pool.execute(`SELECT * FROM bill_status ORDER BY Sl_No DESC LIMIT 1`);
        const generateBillNo = await pool.execute(`SELECT CONCAT("B-", LPAD(${lastEntry[0][0].Sl_No + 1},7,'0')) AS NewBillNo`);
        const BillNo = generateBillNo[0][0].NewBillNo;
        await pool.execute(`INSERT INTO bill_status (Bill_No, Payment_Status, Total_amount) VALUES('${BillNo}', '${false}', '${0.00}')`)

        return res.status(200).json({ data: { cartID, BillNo } })
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: error })
    }
}

const checkCart = async (req,res)=>{
    const cartID = req.query.cartID;
    try {
        const result = await pool.execute('SELECT Phone FROM cart_map WHERE Cart_NO = ?', [cartID]);
        console.log(result[0][0]);
        if(result[0][0].Phone){
            return res.status(200).send("User Connected");;
        }
        res.status(200).send("No User Connected")
    } catch (error) {
        console.log(error);
        res.send("An error occurred!")
        return;
    }
}

const resetCart = async (req, res) => {
    const { cartID } = req.body;
    try {
        await pool.execute(`UPDATE cart_map SET Phone = '${``}' WHERE Cart_No = '${cartID}'`);
        return res.status(200).json({ message: "Success" })
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: error })
    }
}

module.exports = { assignCart,checkCart, resetCart }