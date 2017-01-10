var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getDefaultProps: function() {
        return({
            message: ''
        });
    },
    getInitialState: function() {
        return({
            message: this.props.message
        });
    },
    handleSearch: function(location) {
        //var that = this;
        var message = '';
        
        openWeatherMap.getTemperature(location)
        .then((temperature) => {
            message = `The temperature in ${location} is ${temperature}\xB0F`;
            this.setState({
                message: message
            });
        }, (error) => {
            message = error.message;
            this.setState({
                message: message
            });
        });
    },
    render: function() {
        return(
            <div>
                <h3>Get Weather</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage message={this.state.message}/>
            </div>
        );
    }
});

module.exports = Weather;