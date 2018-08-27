UPDATE products SET
product_name = $2,
price = $3,
producturl = $4
WHERE id = $1;