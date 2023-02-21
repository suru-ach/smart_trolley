CREATE TABLE all_bills (
  Sl_No INT PRIMARY KEY AUTO_INCREMENT
  Contact_Number INT NOT NULL,
  Bill_Date DATE NOT NULL,
  Product_ID INT NOT NULL,
  Product_Name VARCHAR(100) NOT NULL,
  Cost INT NOT NULL,
  Quantity INT NOT NULL DEFAULT 1,
  Amount INT NOT NULL
)

CREATE TABLE all_products (
    Product_ID INT(10) NOT NULL,
    Product_Name VARCHAR(100) NOT NULL,
    Quantity_Available INT(11) NOT NULL,
    Cost NOT NULL,
    Sl_No INT PRIMARY KEY AUTO_INCREMENT
)

CREATE TABLE customers (
    Contact_Number INT NOT NULL,
    Customer_Name VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Sl_No INT PRIMARY KEY AUTO_INCREMENT
);