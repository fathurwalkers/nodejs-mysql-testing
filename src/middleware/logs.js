const logRequest = (req, res, next) => {
    console.log('Logs Fetched! Returning route to next endpoint :', req.path); 
    next();
}

module.exports = logRequest;