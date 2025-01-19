const axios = require('axios');

const getWeather = async (req, res) => {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=YOUR_API_KEY');
        res.status(200).json(response.data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getWeather };
