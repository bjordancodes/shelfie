module.exports = {
    create: (req, res, next)=> {
        const db = req.app.get(db)
        db.create_product([req.body.])
    }
}