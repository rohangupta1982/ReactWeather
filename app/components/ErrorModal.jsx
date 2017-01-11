var React = require('react');

var ErrorModal = React.createClass({
    componentDidMount: function() {
        var modal = Foundation.Reveal($('#errorModal'));
        modal.open();
    },
    render: function() {
        return(
            <div ref="errorModal" id="errorModal" className="reveal tiny text-center" data-reveal>
                <h4>Error Message</h4>
                <p>Some error</p>
                <p><button className="button hollow" data-close>Okay</button></p>
            </div>
        );
    }
});

module.exports = ErrorModal;