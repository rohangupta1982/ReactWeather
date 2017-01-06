var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function() {
//         return(
//             <div>
//                 <h3>{this.props.message}</h3>
//             </div>
//         );
//     }
// });

var WeatherMessage = (props) => {
    return(
        <div>
            <h3>{props.message}</h3>
        </div>
    );
};

module.exports = WeatherMessage;