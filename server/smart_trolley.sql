-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 04, 2023 at 11:37 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smart_trolley`
--

-- --------------------------------------------------------

--
-- Table structure for table `all_bills`
--

CREATE TABLE `all_bills` (
  `Sl_No` int(11) NOT NULL,
  `Bill_Date` date NOT NULL DEFAULT current_timestamp(),
  `Phone` varchar(10) NOT NULL,
  `Bill_No` varchar(11) NOT NULL,
  `Product_ID` int(11) NOT NULL,
  `Product_Name` varchar(100) NOT NULL,
  `Cost` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL DEFAULT 1,
  `Amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `all_bills`
--

INSERT INTO `all_bills` (`Sl_No`, `Bill_Date`, `Phone`, `Bill_No`, `Product_ID`, `Product_Name`, `Cost`, `Quantity`, `Amount`) VALUES
(1, '2023-03-04', 'undefined', '0', 1, 'Malbaro', 20, 1, 0),
(2, '2023-03-04', 'undefined', '0', 2, 'Malbaro2', 24, 1, 0),
(3, '2023-03-04', 'undefined', '0', 3, 'Malbaro3', 10, 1, 0),
(4, '2023-03-04', 'undefined', '0', 3, 'Malbaro3', 10, 1, 0),
(5, '2023-03-04', 'undefined', '0', 1, 'Malbaro', 20, 1, 0),
(6, '2023-03-04', 'undefined', '0', 1, 'Malbaro', 20, 1, 0),
(7, '2023-03-04', 'undefined', '0', 1, 'Malbaro', 20, 1, 0),
(8, '2023-03-04', 'undefined', '0', 1, 'Malbaro', 20, 1, 0),
(9, '2023-03-04', 'undefined', '0', 1, 'Malbaro', 20, 1, 0),
(10, '2023-03-04', 'undefined', '0', 1, 'Malbaro', 20, 1, 0),
(11, '2023-03-04', 'undefined', '0', 1, 'Malbaro', 20, 1, 0),
(12, '2023-03-04', '9449414199', '0', 2, 'Malbaro2', 24, 1, 0),
(13, '2023-03-04', '9449414199', 'B-0000007', 2, 'Malbaro2', 24, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `all_products`
--

CREATE TABLE `all_products` (
  `Product_ID` int(11) NOT NULL,
  `Product_Name` varchar(100) NOT NULL,
  `Cost` float NOT NULL,
  `Sl_No` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `all_products`
--

INSERT INTO `all_products` (`Product_ID`, `Product_Name`, `Cost`, `Sl_No`) VALUES
(3, 'Malbaro3', 10, 1),
(1, 'Malbaro', 20, 2),
(2, 'Malbaro2', 24, 3);

-- --------------------------------------------------------

--
-- Table structure for table `bill_status`
--

CREATE TABLE `bill_status` (
  `Sl_No` int(11) NOT NULL,
  `Bill_No` varchar(20) NOT NULL,
  `Bill_Date` datetime DEFAULT current_timestamp(),
  `Payment_Status` tinyint(1) DEFAULT NULL,
  `Total_Amount` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bill_status`
--

INSERT INTO `bill_status` (`Sl_No`, `Bill_No`, `Bill_Date`, `Payment_Status`, `Total_Amount`) VALUES
(1, '000001', '2023-03-04 12:16:53', 0, 0),
(2, 'B-0000002', '2023-03-04 00:00:00', 0, 0),
(3, 'B-0000003', '2023-03-04 12:59:42', 0, 0),
(4, 'B-0000004', '2023-03-04 13:02:14', 0, 0),
(5, 'B-0000005', '2023-03-04 13:07:40', 0, 0),
(6, 'B-0000006', '2023-03-04 13:33:19', 0, 0),
(7, 'B-0000007', '2023-03-04 13:38:31', 0, 0),
(8, 'B-0000008', '2023-03-04 14:15:57', 0, 0),
(9, 'B-0000009', '2023-03-04 14:23:24', 0, 0),
(10, 'B-0000010', '2023-03-04 14:30:11', 0, 0),
(11, 'B-0000011', '2023-03-04 14:30:11', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `cart_map`
--

CREATE TABLE `cart_map` (
  `Sl_No` int(11) NOT NULL,
  `Cart_No` varchar(10) NOT NULL,
  `Phone` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart_map`
--

INSERT INTO `cart_map` (`Sl_No`, `Cart_No`, `Phone`) VALUES
(1, 'Cart_1', 'null');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `Contact_Number` varchar(10) NOT NULL,
  `Customer_Name` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Sl_No` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`Contact_Number`, `Customer_Name`, `Email`, `Password`, `Sl_No`) VALUES
('2147483647', 'Srivatsa', 'srivatsarupadhya@gmail.com', '$2b$10$bmvE/gPeKUwzO/yMmp5ZNuGVynqS7kK6axJE047bF9qOylxmursOG', 1),
('9449414199', 'srivatsarupadhya', 'srivatsarupadhya@gmail.com', '$2b$10$It2bsV9E0PeCsfnNPb7yjeAW6RXYe/Y4ld48a/3b8Ps4VcAr/jzDq', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `all_bills`
--
ALTER TABLE `all_bills`
  ADD PRIMARY KEY (`Sl_No`);

--
-- Indexes for table `all_products`
--
ALTER TABLE `all_products`
  ADD PRIMARY KEY (`Sl_No`);

--
-- Indexes for table `bill_status`
--
ALTER TABLE `bill_status`
  ADD PRIMARY KEY (`Sl_No`),
  ADD UNIQUE KEY `Bill_No` (`Bill_No`);

--
-- Indexes for table `cart_map`
--
ALTER TABLE `cart_map`
  ADD PRIMARY KEY (`Cart_No`),
  ADD UNIQUE KEY `Sl_No` (`Sl_No`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`Sl_No`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `all_bills`
--
ALTER TABLE `all_bills`
  MODIFY `Sl_No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `all_products`
--
ALTER TABLE `all_products`
  MODIFY `Sl_No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `bill_status`
--
ALTER TABLE `bill_status`
  MODIFY `Sl_No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `cart_map`
--
ALTER TABLE `cart_map`
  MODIFY `Sl_No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `Sl_No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
