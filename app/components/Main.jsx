var React = require('react');
var Navigator = require('Navigator');

// var Main = React.createClass({
//     render: function() {
//         return(
//             <div>
//                 <Navigator/>
//                 <h2>Main Component</h2>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

var Main = (props) => {
    return(
        <div>
            <Navigator/>
            <h2>Main Component</h2>
            {props.children}
        </div>
    );
};

module.exports = Main;