var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

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
        var message = '';
        
        openWeatherMap.getTemperature(location)
        .then((temperature) => {
            message = `The temperature in ${location} is ${temperature}\xB0F`;
            this.setState({
                message: message,
                errorMessage: ''
            });
        }, (e) => {
            message = e.message;
            var state = this.state;
            this.setState({
                message: '',
                errorMessage: message
            });
        });
    },
    render: function() {
        var {errorMessage} = this.state;
        
        function renderError() {
            if(typeof errorMessage === 'string' && errorMessage.length > 0) {
                
                return (
                    <div>
                        <ErrorModal errorMessage={errorMessage}/>
                    </div>
                )
            }
        }
        return(
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage message={this.state.message}/>
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;