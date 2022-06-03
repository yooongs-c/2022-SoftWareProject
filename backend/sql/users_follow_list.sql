CREATE TABLE `users_follow_list` (
  `user_id` int NOT NULL,
  `follow_user_id` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`,`follow_user_id`),
  KEY `users_follow_list_follow_user_id_fkey` (`follow_user_id`),
  CONSTRAINT `users_follow_list_follow_user_id_fkey` FOREIGN KEY (`follow_user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `users_follow_list_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci