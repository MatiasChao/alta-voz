const fetch = require('cross-fetch');

exports.getAll = async (req, res) => {
    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.ACCESS_KEY}`);
    const data = await response.json();

    res.json(data)
}