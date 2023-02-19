CREATE TABLE all_bills (
  Sl_No INT(255) NOT NULL,
  Contact_Number INT(10) NOT NULL,
  Bill_Date DATE NOT NULL,
  Product_ID INT(10) NOT NULL,
  Product_Name VARCHAR(100) NOT NULL,
  Cost INT(10) NOT NULL,
  Quantity INT(10) NOT NULL DEFAULT 1,
  Amount INT(10) NOT NULL
)

CREATE TABLE all_products (
    Product_ID INT(10) NOT NULL,
    Product_Name VARCHAR(100) NOT NULL,
    Quantity_Available INT(11) NOT NULL,
    Cost INT(10) NOT NULL,
    Sl_No INT(255) NOT NULL
)

CREATE TABLE customers (
    Contact_Number INT(10) NOT NULL,
    Customer_Name VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Password VARCHAR(50) NOT NULL, ---hashed and saved
    Sl_No INT(255) NOT NULL
)