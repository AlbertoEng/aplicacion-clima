const axios = require('axios');


const getClima = async( lat, lon)=>{
     const APIKey = '91a8fc5234402844b5a733d3000b4fc0';
     const encodeUrl = encodeURI(APIKey);
     let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8c16c9630c7522c13e09f428e5a44d6e`)
        
     return res.data.weather[0].description;
};


module.exports = {
     getClima
}



        

