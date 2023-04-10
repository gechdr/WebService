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
CREATE DATABASE IF NOT EXISTS `wsinf20222m3` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `wsinf20222m3`;

-- Dumping structure for table wsinf20222m3.buku
CREATE TABLE IF NOT EXISTS `buku` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `tahun_terbit` decimal(4,0) NOT NULL,
  `kategori_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `kategori_id` (`kategori_id`),
  CONSTRAINT `buku_ibfk_1` FOREIGN KEY (`kategori_id`) REFERENCES `kategori_buku` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table wsinf20222m3.buku: ~13 rows (approximately)
/*!40000 ALTER TABLE `buku` DISABLE KEYS */;
INSERT INTO `buku` (`id`, `nama`, `tahun_terbit`, `kategori_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(1, 'Jojo', 2022, 1, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `buku` (`id`, `nama`, `tahun_terbit`, `kategori_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(2, 'Harry Potter', 2021, 2, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `buku` (`id`, `nama`, `tahun_terbit`, `kategori_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(3, 'Percy Jackson', 2020, 3, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `buku` (`id`, `nama`, `tahun_terbit`, `kategori_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(4, 'Sherlock Holmes', 2019, 1, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `buku` (`id`, `nama`, `tahun_terbit`, `kategori_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(5, 'The Lord of the Rings', 2018, 2, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `buku` (`id`, `nama`, `tahun_terbit`, `kategori_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(6, 'Game of Thrones', 2017, 3, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `buku` (`id`, `nama`, `tahun_terbit`, `kategori_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(7, 'House Of Dragon', 2016, 1, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `buku` (`id`, `nama`, `tahun_terbit`, `kategori_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(8, 'Murder on the Orient Express', 2015, 2, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `buku` (`id`, `nama`, `tahun_terbit`, `kategori_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(9, 'Attack on Titan', 2015, 3, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `buku` (`id`, `nama`, `tahun_terbit`, `kategori_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(10, 'Death Note', 2010, 1, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `buku` (`id`, `nama`, `tahun_terbit`, `kategori_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(11, 'Death on the Nile', 2007, 2, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `buku` (`id`, `nama`, `tahun_terbit`, `kategori_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(12, 'The ABC Murders', 2005, 3, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
/*!40000 ALTER TABLE `buku` ENABLE KEYS */;

-- Dumping structure for table wsinf20222m3.kategori_buku
CREATE TABLE IF NOT EXISTS `kategori_buku` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table wsinf20222m3.kategori_buku: ~3 rows (approximately)
/*!40000 ALTER TABLE `kategori_buku` DISABLE KEYS */;
INSERT INTO `kategori_buku` (`id`, `nama`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(1, 'Action', '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `kategori_buku` (`id`, `nama`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(2, 'Comedy', '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `kategori_buku` (`id`, `nama`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(3, 'Romance', '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
/*!40000 ALTER TABLE `kategori_buku` ENABLE KEYS */;

-- Dumping structure for table wsinf20222m3.pengguna
CREATE TABLE IF NOT EXISTS `pengguna` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table wsinf20222m3.pengguna: ~3 rows (approximately)
/*!40000 ALTER TABLE `pengguna` DISABLE KEYS */;
INSERT INTO `pengguna` (`id`, `nama`, `gender`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(1, 'esther', 0, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `pengguna` (`id`, `nama`, `gender`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(2, 'evan', 1, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `pengguna` (`id`, `nama`, `gender`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(3, 'mimi', 1, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
/*!40000 ALTER TABLE `pengguna` ENABLE KEYS */;

-- Dumping structure for table wsinf20222m3.toko
CREATE TABLE IF NOT EXISTS `toko` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `pengguna_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pengguna_id` (`pengguna_id`),
  CONSTRAINT `toko_ibfk_1` FOREIGN KEY (`pengguna_id`) REFERENCES `pengguna` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table wsinf20222m3.toko: ~3 rows (approximately)
/*!40000 ALTER TABLE `toko` DISABLE KEYS */;
INSERT INTO `toko` (`id`, `nama`, `pengguna_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(1, 'Sumber Pinter', 1, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `toko` (`id`, `nama`, `pengguna_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(2, 'Pokoke Lulus', 2, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `toko` (`id`, `nama`, `pengguna_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(3, 'Buku Dimasak Diminum', 3, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
/*!40000 ALTER TABLE `toko` ENABLE KEYS */;

-- Dumping structure for table wsinf20222m3.toko_buku
CREATE TABLE IF NOT EXISTS `toko_buku` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `toko_id` int(11) DEFAULT NULL,
  `buku_id` int(11) DEFAULT NULL,
  `stok` decimal(4,0) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `toko_id` (`toko_id`),
  KEY `buku_id` (`buku_id`),
  CONSTRAINT `toko_buku_ibfk_1` FOREIGN KEY (`toko_id`) REFERENCES `toko` (`id`),
  CONSTRAINT `toko_buku_ibfk_2` FOREIGN KEY (`buku_id`) REFERENCES `buku` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table wsinf20222m3.toko_buku: ~10 rows (approximately)
/*!40000 ALTER TABLE `toko_buku` DISABLE KEYS */;
INSERT INTO `toko_buku` (`id`, `toko_id`, `buku_id`, `stok`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(1, 1, 1, 11, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `toko_buku` (`id`, `toko_id`, `buku_id`, `stok`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(2, 1, 3, 13, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `toko_buku` (`id`, `toko_id`, `buku_id`, `stok`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(3, 1, 5, 15, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `toko_buku` (`id`, `toko_id`, `buku_id`, `stok`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(4, 2, 2, 22, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `toko_buku` (`id`, `toko_id`, `buku_id`, `stok`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(5, 2, 4, 24, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `toko_buku` (`id`, `toko_id`, `buku_id`, `stok`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(6, 2, 6, 26, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `toko_buku` (`id`, `toko_id`, `buku_id`, `stok`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(7, 3, 1, 31, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `toko_buku` (`id`, `toko_id`, `buku_id`, `stok`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(8, 3, 5, 35, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `toko_buku` (`id`, `toko_id`, `buku_id`, `stok`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(9, 3, 2, 32, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
INSERT INTO `toko_buku` (`id`, `toko_id`, `buku_id`, `stok`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(10, 3, 4, 34, '2023-02-12 15:36:40', '2023-02-12 15:36:40', NULL);
/*!40000 ALTER TABLE `toko_buku` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
