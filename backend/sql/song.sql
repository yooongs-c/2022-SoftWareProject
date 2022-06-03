CREATE TABLE `song` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `singer` varchar(50) NOT NULL,
  `playlist_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `song_playlist_id_fkey` (`playlist_id`),
  CONSTRAINT `song_playlist_id_fkey` FOREIGN KEY (`playlist_id`) REFERENCES `playlist` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci