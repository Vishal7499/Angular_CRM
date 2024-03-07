CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    contactNumber VARCHAR(25),
    email VARCHAR(50) UNIQUE,
    password VARCHAR(250),
    status VARCHAR(250),
    role VARCHAR(20)
);
INSERT INTO Customer (name, contactNumber, email, password, status, role)
VALUES ('Admin', '7499028909', 'vishalmarkad2020@gmail.com', 'admin', 'true', 'admin');


CREATE TABLE category (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

create table product (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    categoryId integer NOT NULL,
    description VARCHAR(255),
    price integer,
    status VARCHAR(20),
    primary key (id)
);

create table bill(
    id int NOT NULL AUTO_INCREMENT,
    uuid VARCHAR(255) NOT NULL,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    contactNumber varchar(255) NOT NULL,
    paymentMethod varchar(255) NOT NULL,
    total int NOT NULL,
    productDetails JSON DEFAULT NULL,
    createBy VARCHAR(255) NOT NULL,
    primary key (id)
);


[{\"id\":1,\"name\":\"Black Coffee\",\"price\":99,\"total\":99,\"category\":\"Coffee\",\"quantity\":\"1\"}]