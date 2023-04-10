-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.21-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for wsinf20222m3
CREATE DATABASE IF NOT EXISTS `wsinf20222m5` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `wsinf20222m5`;

CREATE TABLE `buku` (
  `kode` varchar(5) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `tahun_terbit` int(11) NOT NULL,
  `id_kategori` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `kategori_buku` (
  `id` varchar(5) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `rating` decimal(2,1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `buku`
  ADD PRIMARY KEY (`kode`),
  ADD KEY `fk_kategori_buku` (`id_kategori`);

ALTER TABLE `kategori_buku`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `buku`
  ADD CONSTRAINT `fk_kategori_buku` FOREIGN KEY (`id_kategori`) REFERENCES `kategori_buku` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;