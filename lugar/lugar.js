
const axios = require('axios');

const getLugarLatLon = async( direccion )=> {
     
     let encodeUrl = encodeURI(direccion);
     const instance = axios.create({
          baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl} `,
          headers: {'X-RapidAPI-Key': '7f39789aabmsh477d38cff3c2466p13f678jsn001de91b55c1'}
     });
     const result = await instance.get();
     if( result.data.Results==0){
          throw new Error(`No se encuentra ese lugar ${ direccion }`);
     }

     let data = result.data.Results[0];
     let lugar = data.name;
     let lat = data.lat;
     let lon = data.lon;

     return {
          lugar,
          lat,
          lon
     }
}

module.exports = {
     getLugarLatLon
}