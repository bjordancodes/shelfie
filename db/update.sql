UPDATE products SET
product_name = $2 AND
price = $3 AND
producturl = $4
WHERE id = $1;