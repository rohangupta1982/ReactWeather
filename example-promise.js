// function add(a,b) {
//     return new Promise(function(resolve,reject){
//         if(typeof a === 'number' && typeof b === 'number') {
//             resolve(a+b);
//         }
//         else {
//             reject('Enter valid numbers');
//         }
//     });
// }

// add("s",6).then(function(sum){
//     console.log('promise success', sum);
// }, function(err){
//     console.log('promise error',err);
// });
// var axios = require('axios');

// const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather';
// const API_KEY = '41c37f9b08e61caa80f73539629e238e';
// const TEMP_UNIT = 'imperial';

// var getTemp = function(location) {
//     axios.get(OPEN_WEATHER_MAP_URL, {
//         params: {
//             q: location,
//             appid: API_KEY,
//             units: TEMP_UNIT            
//         }
//     })
//     .then(function(response) {
//         console.log(response.data.main.temp + `\xB0F`);
//         return response.data.main.temp;
//     })
//     .catch(function(error){
//         console.log('ERROR_CODE: ' + error.response.data.cod);
//         console.log('ERROR_MESSAGE: ' + error.response.data.message);
//         throw new Error(error.response.data.message);
//     })
// };

// getTemp('carmel');

var addStatement = (a,b) => {
    console.log(a+b);
};

var addExpression = (a,b) => console.log(a+b);

addStatement(1,5);
addExpression(6,3);