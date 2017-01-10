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
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;