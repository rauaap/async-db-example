-- Drop the 'account' table if it exists
DROP TABLE IF EXISTS `account`;

-- Drop the 'user' table if it exists
DROP TABLE IF EXISTS `user`;

-- Create the 'user' table
CREATE TABLE `user` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL
);

-- Create the 'account' table
CREATE TABLE `account` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `balance` DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)
);

-- Insert data into the 'user' table
INSERT INTO `user` (`username`) VALUES
    ('user1'),
    ('user2'),
    ('user3');

-- Insert data into the 'account' table
INSERT INTO `account` (`user_id`, `balance`) VALUES
    (1, 1000.00),
    (2, 500.00),
    (3, 750.00);

