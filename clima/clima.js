const axios = require('axios');

// api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=52a49e3761c373c7d68241b2bfed9a13&units=metric

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=52a49e3761c373c7d68241b2bfed9a13&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}