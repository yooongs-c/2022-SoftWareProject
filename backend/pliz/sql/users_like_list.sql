CREATE TABLE `users_like_list` (
  `user_id` int NOT NULL,
  `like_playlist_id` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`,`like_playlist_id`),
  KEY `users_like_list_like_playlist_id_fkey` (`like_playlist_id`),
  CONSTRAINT `users_like_list_like_playlist_id_fkey` FOREIGN KEY (`like_playlist_id`) REFERENCES `playlist` (`id`),
  CONSTRAINT `users_like_list_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci