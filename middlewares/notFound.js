const notFound = (req, res, next) => res.status(404).json({
    error: 'Endpoint does not exist'
});

module.exports = notFound;