CREATE TABLE `community_comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `community_id` int NOT NULL,
  `comment` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `community_comments_user_id_fkey` (`user_id`),
  KEY `community_comments_community_id_fkey` (`community_id`),
  CONSTRAINT `community_comments_community_id_fkey` FOREIGN KEY (`community_id`) REFERENCES `community` (`id`),
  CONSTRAINT `community_comments_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci