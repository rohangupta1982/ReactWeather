var React = require('react');

var ErrorModal = React.createClass({
    getDefaultProps: function() {
        return {
            title: 'Error'
        };
    },
    propTypes: {
        title: React.PropTypes.string,
        errorMessage: React.PropTypes.string.isRequired
    },
    componentDidMount: function() {
        var modal = new Foundation.Reveal($('#errorModal'));
        modal.open();
    },
    render: function() {
        var {title,errorMessage} = this.props;
        
        return(
            <div ref="errorModal" id="errorModal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{errorMessage}</p>
                <p><button className="button hollow" data-close="">Okay</button></p>
            </div>
        );
    }
});

module.exports = ErrorModal;