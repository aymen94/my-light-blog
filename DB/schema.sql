-- Database: My light blog --

CREATE SCHEMA my_light_blog
CHARACTER SET utf8 
COLLATE utf8_general_ci;

-- user table --
CREATE TABLE my_light_blog.`user`(
	id INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    lastname  VARCHAR(25),
    email VARCHAR(40) UNIQUE NOT NULL,
    `password` CHAR(64)
);

-- category table --
CREATE TABLE my_light_blog.category(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- post table --
CREATE TABLE my_light_blog.post(
	id INT PRIMARY KEY AUTO_INCREMENT,
	`user` INT NOT NULL,
	category INT NOT NULL,
	title VARCHAR(200),
	body TEXT,
    `date` TIMESTAMP,
	FOREIGN KEY (`user`) REFERENCES `user`(id),
	FOREIGN KEY (`category`) REFERENCES `category`(id),
	FULLTEXT(title,body)
);

