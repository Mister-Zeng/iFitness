-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: ifitness
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `daily_entry`
--

DROP TABLE IF EXISTS `daily_entry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daily_entry` (
  `daily_entry_id` bigint NOT NULL,
  `date` date DEFAULT NULL,
  `weight` int NOT NULL,
  `daily_macros_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`daily_entry_id`),
  UNIQUE KEY `UK_gxdvjqjwyrtx9o3rvq3abr4v7` (`date`),
  UNIQUE KEY `UK_2q6rhgxogw2c1ry5dq2218x01` (`daily_macros_id`),
  KEY `FKfsb7cb50o55likbn4r54p0rpw` (`user_id`),
  CONSTRAINT `FKfsb7cb50o55likbn4r54p0rpw` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `FKp6wy2b2n1fv5prabloq2txg4k` FOREIGN KEY (`daily_macros_id`) REFERENCES `daily_macros` (`daily_macros_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_entry`
--

LOCK TABLES `daily_entry` WRITE;
/*!40000 ALTER TABLE `daily_entry` DISABLE KEYS */;
INSERT INTO `daily_entry` VALUES (2,'2022-08-10',205,3,1),(4,'2022-08-12',200,5,1),(6,'2022-09-01',180,7,1),(8,'2022-09-18',150,9,1),(10,'2022-10-05',130,11,1),(12,'2022-10-07',170,13,1),(14,'2022-10-08',120,15,1),(16,'2022-10-11',200,17,1),(18,'2022-11-05',130,19,1),(20,'2022-11-06',150,21,1);
/*!40000 ALTER TABLE `daily_entry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `daily_macros`
--

DROP TABLE IF EXISTS `daily_macros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daily_macros` (
  `daily_macros_id` bigint NOT NULL,
  `calories` int NOT NULL,
  `carbs` int NOT NULL,
  `fat` int NOT NULL,
  `protein` int NOT NULL,
  PRIMARY KEY (`daily_macros_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_macros`
--

LOCK TABLES `daily_macros` WRITE;
/*!40000 ALTER TABLE `daily_macros` DISABLE KEYS */;
INSERT INTO `daily_macros` VALUES (3,1500,20,30,80),(5,1500,20,30,80),(7,1500,20,30,80),(9,1500,20,30,80),(11,1500,20,30,80),(13,0,0,0,0),(15,0,0,0,0),(17,0,0,0,0),(19,1600,15,50,80),(21,0,0,0,0);
/*!40000 ALTER TABLE `daily_macros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exercises`
--

DROP TABLE IF EXISTS `exercises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercises` (
  `exercise_id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `reps` int NOT NULL,
  `sets` int NOT NULL,
  `weight` int NOT NULL,
  `daily_entry_id` bigint DEFAULT NULL,
  PRIMARY KEY (`exercise_id`),
  KEY `FKrevcwgw1u869rkkogai09ix25` (`daily_entry_id`),
  CONSTRAINT `FKrevcwgw1u869rkkogai09ix25` FOREIGN KEY (`daily_entry_id`) REFERENCES `daily_entry` (`daily_entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercises`
--

LOCK TABLES `exercises` WRITE;
/*!40000 ALTER TABLE `exercises` DISABLE KEYS */;
/*!40000 ALTER TABLE `exercises` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (22);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `macros_goal`
--

DROP TABLE IF EXISTS `macros_goal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `macros_goal` (
  `macros_goal_id` bigint NOT NULL,
  `calories` int NOT NULL,
  `carbs` int NOT NULL,
  `fat` int NOT NULL,
  `protein` int NOT NULL,
  PRIMARY KEY (`macros_goal_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `macros_goal`
--

LOCK TABLES `macros_goal` WRITE;
/*!40000 ALTER TABLE `macros_goal` DISABLE KEYS */;
INSERT INTO `macros_goal` VALUES (1,1800,50,80,150);
/*!40000 ALTER TABLE `macros_goal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `email_address` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `macros_goal_id` bigint DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_1ar956vx8jufbghpyi09yr16l` (`email_address`),
  UNIQUE KEY `UK_r43af9ap4edm43mmtq01oddj6` (`username`),
  UNIQUE KEY `UK_4mh3ic1n540x32d3jluq7y402` (`macros_goal_id`),
  CONSTRAINT `FKaxbtjpmor4pn0gr0ot7uklhlx` FOREIGN KEY (`macros_goal_id`) REFERENCES `macros_goal` (`macros_goal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'jsmith123@gmail.com','John','Smith','$2a$10$ocfF.bZG/JXhJJPMXcrW1eadV4DBpnoaCHoXKHBeGma7fIuoW1CpO','user',NULL,'test',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-05 15:37:11
