-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2023 at 10:09 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `somictstoreapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `full_name` varchar(90) NOT NULL,
  `username` varchar(90) NOT NULL,
  `email` varchar(90) NOT NULL,
  `password` varchar(90) NOT NULL,
  `adminProfile` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `full_name`, `username`, `email`, `password`, `adminProfile`) VALUES
(1, 'apiipakar mohamoud abdirahman', 'apiipakar', 'apiipakar@gmail.com', '1122', '');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `catergories`
--

CREATE TABLE `catergories` (
  `id` int(255) NOT NULL,
  `catergory_name` varchar(255) NOT NULL,
  `icon` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `catergories`
--

INSERT INTO `catergories` (`id`, `catergory_name`, `icon`) VALUES
(1, 'Cctv', 'image-1702454477936.png'),
(2, 'mobile', 'image-1702454509075.png'),
(3, 'Ui Ux', 'image-1702454527951.png'),
(4, 'Website', 'image-1702454559456.png'),
(5, 'Attendance', 'image-1702454579166.png'),
(6, 'Security', 'image-1702454608440.png'),
(7, 'Database', 'image-1702454630088.png');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `Product_id` int(11) NOT NULL,
  `comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `seen` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `Product_id` int(11) NOT NULL,
  `Time` timestamp NULL DEFAULT current_timestamp(),
  `Order_status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `Product_id`, `Time`, `Order_status`) VALUES
(1, 1, 5, '2023-12-16 07:12:21', 1);

-- --------------------------------------------------------

--
-- Table structure for table `order_status`
--

CREATE TABLE `order_status` (
  `id` int(11) NOT NULL,
  `Order_status_name` varchar(90) NOT NULL DEFAULT 'Pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_status`
--

INSERT INTO `order_status` (`id`, `Order_status_name`) VALUES
(1, 'pending'),
(2, 'Delivery'),
(3, 'Completed');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `Product_name` varchar(90) NOT NULL,
  `Description` varchar(5000) NOT NULL,
  `category_id` int(255) NOT NULL,
  `price` int(11) NOT NULL,
  `cover_Image` varchar(500) NOT NULL,
  `image_two` varchar(500) NOT NULL,
  `image_three` varchar(500) DEFAULT NULL,
  `ProductType` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `Product_name`, `Description`, `category_id`, `price`, `cover_Image`, `image_two`, `image_three`, `ProductType`) VALUES
(5, 'Hikvision', '\r\nHikvision is a well-known manufacturer of surveillance and security products, including network cameras, analog cameras, video recorders, and other related equipment. Their products are widely used in various applications, such as video surveillance for businesses, public spaces, and residential areas.\r\n\r\nIf you have a Hikvision camera and you\'re looking for information or assistance, here are some general guidelines:\r\n\r\nProduct Documentation:\r\nCheck the product documentation that came with your Hikvision camera. This documentation typically includes user manuals, installation guides, and other important information about the camera\'s features and settings.\r\n\r\nHikvision Website:\r\nVisit the official Hikvision website for product information, firmware updates, and additional resources. The official website is a valuable source for finding the latest software, manuals, and support.\r\n\r\nHik-Connect App:\r\nIf your camera is compatible, you may use the Hik-Connect app for remote access and management of your Hikvision camera. The app allows you to view live video, playback recorded footage, and configure camera settings.\r\n\r\nDevice Configuration:\r\nAccess the camera\'s web interface by entering its IP address in a web browser. You may need to log in with the camera\'s credentials. From the web interface, you can configure various settings such as video quality, recording options, and network settings.\r\n\r\nFirmware Updates:\r\nRegularly check for firmware updates on the Hikvision website. Updating your camera\'s firmware can provide improvements, bug fixes, and new features.\r\n\r\nTechnical Support:\r\nIf you encounter issues or have specific questions about your Hikvision camera, consider reaching out to Hikvision\'s technical support. They may provide assistance through their official support channels, such as online chat, email, or phone support.\r\n\r\nAuthorized Resellers:\r\nIf you purchased your Hikvision camera through an authorized reseller or distributor, they may also be able to provide support and guidance.\r\n\r\nRemember that proper configuration and security measures are crucial when setting up surveillance cameras to protect your privacy and the security of the system. Always follow best practices and guidelines provided by Hikvision and other relevant security authorities.', 1, 100, 'CoverImage-1702454841137.jpg', 'imageTwo-1702454841138.jpeg', NULL, 1),
(6, 'Zkteco Attendance system', 'ZKTeco is a company that provides biometric and RFID security solutions, including attendance terminals for time and attendance management. Their attendance terminals are commonly used in various industries to track and manage employee attendance. If you have a ZKTeco attendance terminal and need information or assistance, here are some general guidelines:\r\n\r\nProduct Documentation:\r\nCheck the product documentation that came with your ZKTeco attendance terminal. This documentation typically includes user manuals, installation guides, and other important information about the terminal\'s features and settings.\r\n\r\nZKTeco Website:\r\nVisit the official ZKTeco website for product information, firmware updates, and additional resources. The official website is a valuable source for finding the latest software, manuals, and support.\r\n\r\nAttendance Management Software:\r\nZKTeco attendance terminals often come with attendance management software. Install and configure this software to manage attendance records, generate reports, and configure terminal settings. The software allows you to download attendance data from the terminal and perform various administrative tasks.\r\n\r\nDevice Configuration:\r\nAccess the terminal\'s settings through its user interface or configuration tool. You can typically configure settings such as user information, access control rules, and communication settings.\r\n\r\nFirmware Updates:\r\nRegularly check for firmware updates on the ZKTeco website. Updating the terminal\'s firmware can provide improvements, bug fixes, and new features.\r\n\r\nTechnical Support:\r\nIf you encounter issues or have specific questions about your ZKTeco attendance terminal, consider reaching out to ZKTeco\'s technical support. They may provide assistance through their official support channels, such as online chat, email, or phone support.\r\n\r\nAuthorized Resellers:\r\nIf you purchased your ZKTeco attendance terminal through an authorized reseller or distributor, they may also be able to provide support and guidance.\r\n\r\nRemember to follow the user guidelines and best practices provided by ZKTeco to ensure the proper functioning and security of your attendance terminal. Additionally, make sure to handle attendance data in compliance with relevant privacy and data protection regulations.', 5, 200, 'CoverImage-1702455419721.png', 'imageTwo-1702455419725.jpg', NULL, 1),
(7, 'Light Bulb Camera', 'A light bulb camera is a type of surveillance device that combines the functionality of a light bulb with a built-in camera. This innovative design allows users to discreetly monitor an area while also providing illumination. Here are some key features and considerations related to light bulb cameras:\r\n\r\nIntegration with Smart Home Systems: Many light bulb cameras are designed to integrate seamlessly with smart home systems. This integration enables users to control the camera, adjust lighting settings, and receive alerts through a centralized smart home platform or mobile app.\r\n\r\nRemote Monitoring: Light bulb cameras often come equipped with remote monitoring capabilities, allowing users to access live video feeds from the camera through a smartphone, tablet, or computer. This can be useful for checking on your home or office while you\'re away.\r\n\r\nMotion Detection and Alerts: To enhance security, these cameras often feature motion detection technology. When motion is detected, the camera can send alerts or notifications to the user\'s device, prompting them to check the live feed.\r\n\r\nTwo-Way Audio: Some light bulb cameras have built-in microphones and speakers, enabling two-way audio communication. This feature can be useful for interacting with people in the monitored area or acting as an intercom.\r\n\r\nRecording and Storage: Video footage from light bulb cameras can be stored locally on a microSD card or uploaded to a cloud-based storage service. Check the camera specifications to understand the recording and storage options available.\r\n\r\nInstallation and Compatibility: Installation of a light bulb camera is typically straightforward and can be done by replacing an existing light bulb in a standard light socket. Ensure compatibility with the fixtures and sockets in your home or office.\r\n\r\nResolution and Image Quality: Consider the camera\'s resolution and image quality to ensure clear and detailed footage. Higher resolution cameras generally provide better image quality, allowing for easier identification of people or objects in the footage.\r\n\r\nPrivacy and Security: Given that these devices capture video inside your living or working space, privacy and security are crucial. Choose reputable brands with a focus on security, and make sure to set up strong passwords for any associated accounts.\r\n\r\nRemember to review user reviews and product specifications before purchasing a light bulb camera to ensure it meets your specific needs and expectations.', 1, 100, 'CoverImage-1702455598883.png', 'imageTwo-1702455598887.jpg', NULL, 1),
(8, 'samsung a50', 'this is samsung mobile a5o ', 2, 220, 'CoverImage-1702541050635.png', 'imageTwo-1702541050636.png', NULL, 3);

-- --------------------------------------------------------

--
-- Table structure for table `product_types`
--

CREATE TABLE `product_types` (
  `id` int(11) NOT NULL,
  `type_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_types`
--

INSERT INTO `product_types` (`id`, `type_name`) VALUES
(1, 'popular products'),
(2, 'Featured Products'),
(3, 'Latest Products');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` int(50) NOT NULL,
  `password` varchar(16) NOT NULL,
  `userProfile` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `username`, `email`, `phone_number`, `password`, `userProfile`) VALUES
(1, 'apiipakar mohamoud', 'apiipakar', 'apiipakar2023@gmail.com', 907789485, '112233hh', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`,`username`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_product_id` (`product_id`),
  ADD KEY `fk_user_cart` (`user_id`);

--
-- Indexes for table `catergories`
--
ALTER TABLE `catergories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_commentedUser` (`user_id`),
  ADD KEY `fk_product` (`Product_id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_ordered_products` (`Product_id`),
  ADD KEY `fk_ordered_user` (`user_id`),
  ADD KEY `fk_Order_status` (`Order_status`);

--
-- Indexes for table `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_category` (`category_id`),
  ADD KEY `fk_product_type` (`ProductType`);

--
-- Indexes for table `product_types`
--
ALTER TABLE `product_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `catergories`
--
ALTER TABLE `catergories`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `order_status`
--
ALTER TABLE `order_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `product_types`
--
ALTER TABLE `product_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `fk_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_user_cart` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `fk_commentedUser` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION,
  ADD CONSTRAINT `fk_product` FOREIGN KEY (`Product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_Order_status` FOREIGN KEY (`Order_status`) REFERENCES `order_status` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_ordered_products` FOREIGN KEY (`Product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `fk_ordered_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_product_type` FOREIGN KEY (`ProductType`) REFERENCES `product_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
