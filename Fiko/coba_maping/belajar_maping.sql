-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2023 at 01:22 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `belajar_maping`
--

-- --------------------------------------------------------

--
-- Table structure for table `lulus`
--

CREATE DATABASE IF NOT EXISTS `belajar_maping` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `belajar_maping`;

CREATE TABLE `lulus` (
  `id_lulus` varchar(64) NOT NULL,
  `id_mhs` varchar(64) NOT NULL,
  `id_pel` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lulus`
--

INSERT INTO `lulus` (`id_lulus`, `id_mhs`, `id_pel`) VALUES
('lulus1', 'mhs1', 'pel1'),
('lulus2', 'mhs2', 'pel2'),
('lulus3', 'mhs1', 'pel1');

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `id_mhs` varchar(64) NOT NULL,
  `nama_mhs` text DEFAULT NULL,
  `email` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`id_mhs`, `nama_mhs`, `email`) VALUES
('mhs1', 'Mahasiswa1', 'mahasiswa1@gmail.com'),
('mhs2', 'Mahasiswa2', 'Mahasiswa2@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `pelajaran`
--

CREATE TABLE `pelajaran` (
  `id_pel` varchar(64) NOT NULL,
  `nama_pel` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pelajaran`
--

INSERT INTO `pelajaran` (`id_pel`, `nama_pel`) VALUES
('pel1', 'pelajaran1'),
('pel2', 'pelajaran2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lulus`
--
ALTER TABLE `lulus`
  ADD PRIMARY KEY (`id_lulus`),
  ADD KEY `id_mhs` (`id_mhs`),
  ADD KEY `id_pel` (`id_pel`);

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`id_mhs`);

--
-- Indexes for table `pelajaran`
--
ALTER TABLE `pelajaran`
  ADD PRIMARY KEY (`id_pel`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `lulus`
--
ALTER TABLE `lulus`
  ADD CONSTRAINT `lulus_ibfk_1` FOREIGN KEY (`id_mhs`) REFERENCES `mahasiswa` (`id_mhs`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lulus_ibfk_2` FOREIGN KEY (`id_pel`) REFERENCES `pelajaran` (`id_pel`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
