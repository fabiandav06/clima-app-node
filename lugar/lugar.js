const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encoudeUrl = encodeURI(dir);

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encoudeUrl}&appid=5ab0d8f55a095c8df494be814ed1ee7b`);


    if (resp.data.coord.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}