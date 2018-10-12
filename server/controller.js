module.exports = {
    create: (req, res, next)=> {
        const db = req.app.get('db')
        db.create([req.query.product_name, req.query.price, req.query.producturl])
        .then((response)=> res.status(200).send(response))
        .catch(err=> console.log(err))},

    read: (req, res, next)=> {
        const db = req.app.get('db')
        console.log(db)
        db.read()
        .then(response=> res.status(200).send(response))
        .catch(err=> console.log(err));
    },

    update: (req, res, next) => {
        const db = req.app.get('db')
        const {product_name, price, producturl} = req.query;
        db.update([req.params.id, product_name, price, producturl])
        .then(response=> res.status(200).send("Update Complete!"))
        .catch(err => console.log(err));
    },

    delete: (req, res, next) => {
        const db = req.app.get('db')
        db.delete(req.params.id).then(response=>res.status(200).send(response))
        .catch(err=> console.log(err))
    }
}

//DON'T DELETE ME