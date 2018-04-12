CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    authid VARCHAR(50),
    name VARCHAR(50)
);

CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES product(id),
    user_id INTEGER REFERENCES users(id)
);

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    type VARCHAR(50),
    price money
)
