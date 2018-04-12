SELECT * FROM cart JOIN product ON product.id = cart.product_id WHERE user_id = $1;
