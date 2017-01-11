var React = require('react');

// var About = React.createClass({
//     render: function() {
//         return(
//             <h3>About Component</h3>
//         );
//     }
// });

var About = () => {
    return(
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a simple Weather Web App built with ReactJS.
            The app displays weather for an entered valid city.</p>
            <p>Here are some of the tools I used:</p>
            <ul>
                <li>
                    <a href="https://openweathermap.org/" target="_blank">Open Weather Map</a> - I used this API to search
                    for weather data by city name.
                </li>
                <li>
                    <a href="https://facebook.github.io/react" target="_blank">React</a> - This was the javascript framework I used.
                </li>
            </ul>
            <p><a href="https://github.com/rohangupta1982/ReactWeather" target="_blank">Here</a> is the 
            link to github code of the app.</p>
        </div>
    );
};

module.exports = About;