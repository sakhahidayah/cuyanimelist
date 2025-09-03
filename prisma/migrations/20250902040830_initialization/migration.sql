-- CreateTable
CREATE TABLE `Collection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `anime_mal_id` VARCHAR(191) NOT NULL,
    `email_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Collection_anime_mal_id_email_id_key`(`anime_mal_id`, `email_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
