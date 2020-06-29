const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


lugar.getLugarLatLng(argv.direccion)
    .then(resp => {

        clima.getClima(resp.lat, resp.lng)
            .then(clm => {
                console.log(`La temperatura de ${resp.direccion} es de ${clm}`);
            })
            .catch(e => {
                console.log(`No se pudo determinar el clima de ${resp.direccion}`);
            })
        console.log(resp);
    })
    .catch(err => {
        console.log('Error !!', err);
    })