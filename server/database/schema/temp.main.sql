CREATE TABLE all_bills (
  Transaction_No INT NOT NULL,
  Contact_Number INT NOT NULL,
  Bill_Date DATE NOT NULL,
  Product_ID INT NOT NULL,
  Product_Name VARCHAR(100) NOT NULL,
  Cost INT NOT NULL,
  Quantity INT NOT NULL DEFAULT 1,
  Amount INT NOT NULL
)

CREATE TABLE all_products (
    Product_ID INT NOT NULL,
    Product_Name VARCHAR(100) NOT NULL,
    Cost FLOAT NOT NULL,
    Sl_No INT PRIMARY KEY AUTO_INCREMENT
)

CREATE TABLE customers (
    Contact_Number INT NOT NULL,
    Customer_Name VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Sl_No INT PRIMARY KEY AUTO_INCREMENT
);