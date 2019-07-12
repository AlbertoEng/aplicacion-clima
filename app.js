
const lugar = require('./lugar/lugar');   // importamos script lugar.js
const clima = require('./clima/clima');   // importamos script clima.js
const argv = require('yargs').options({   // hacemos uso de yargs con opciones
     direccion:{                            // agregamos una opcion llamada desripcion
          demand: true,
          alias: 'd',
          desc: 'Escribe una ciudad de cualquier pais del mundo'
     }
}).argv;    // retornamos los argumentos desde la consola

lugar.getLugarLatLon( argv.direccion)
     .then( response =>{
          clima.getClima(response.lat,response.lon)
               .then( resp => {
                    console.log(resp);
               })
               .catch( err => {
                    console.log(err);
               });
     })
     .catch( err => { 
          console.log("Erroooor", err);
     });