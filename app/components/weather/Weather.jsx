var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getDefaultProps: function() {
        return({
            message: undefined
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
                errorMessage: undefined
            });
        }, (e) => {
            message = e.message;
            var state = this.state;
            this.setState({
                message: undefined,
                errorMessage: message
            });
        });
    },
    handleOutOfComponentSearch: function(location) {
        var location = location;
        
        if(typeof location === 'string' && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '/';
        }
    },
    componentDidMount: function() {
        this.handleOutOfComponentSearch(this.props.location.query.location);
    },
    componentWillReceiveProps: function(newProps) {
        this.handleOutOfComponentSearch(newProps.location.query.location);
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
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage message={this.state.message}/>
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;