var React = require('react');

var WeatherForm = React.createClass({
    getWeather: function(e) {
        e.preventDefault();
        
        var location = this.refs.location.value;
        
        if(typeof location === 'string' && location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function() {
        return(
            <div>
                <form onSubmit={this.getWeather}>
                    <div>
                        <input type="text" ref="location" placeholder="Enter city name"/>
                    </div>
                    <div>
                        <button className="button expanded hollow">Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;