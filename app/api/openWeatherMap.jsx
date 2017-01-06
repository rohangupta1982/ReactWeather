var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '41c37f9b08e61caa80f73539629e238e';
const TEMP_UNIT = 'imperial';

module.exports = {
    getTemperature: function(location) {
        return axios.get(OPEN_WEATHER_MAP_URL, {
            params: {
                q: location,
                appid: API_KEY,
                units: TEMP_UNIT            
            }
        })
        .then(function(response) {
            return response.data.main.temp;
        })
        .catch(function(error){
            console.log('ERROR_CODE: ' + error.response.data.cod);
            console.log('ERROR_MESSAGE: ' + error.response.data.message);
            throw new Error(error.response.data.message);
        });
    }
}