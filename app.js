const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cuidad para obtener el clima',
        demand: true
    }
}).argv;

// argv.direccion

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(21.990000, -103.230003)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {

        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ direccion } es de ${ temp } ºC`;

    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });