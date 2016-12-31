var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="col-sm-2 col-md-6 col-xs-2">
          <img src={this.props.src} alt="emory-logo"/>
      </div>
    )
  }
});
