module.exports = (req, res, next) =>
{
    if(req.method == 'POST') {
        req.method = 'GET'      // GETに偽装
        req.query = req.body
    }
    next()
}