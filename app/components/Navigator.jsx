var React = require('react');
var {Link, IndexLink} = require('react-router');

// First
// var Navigator = React.createClass({
//     render: function() {
//         return(
//             <div>
//                 <h2>Navigator Component</h2>
//                 <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//                 <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//                 <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//             </div>
//         );
//     }
// });

// Second
// var Navigator = () => {
//     return(
//         <div>
//             <h2>Navigator Component</h2>
//             <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//             <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//             <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//         </div>
//     );
// };

//Third
var Navigator = React.createClass({
    getWeather: function(e) {
        e.preventDefault();
        alert(this.refs.location.value);
    },
    render: function() {
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.getWeather}>
                        <ul className="menu">
                            <li>
                                <input type="text" ref="location" placeholder="Enter city name"/>
                            </li>
                            <li>
                                <button className="button">Get Weather</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Navigator;