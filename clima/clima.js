const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5ab0d8f55a095c8df494be814ed1ee7b&units=metric`);

    return resp.data.main.temp
}

module.exports = {
    getClima
}