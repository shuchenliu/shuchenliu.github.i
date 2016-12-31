var React = require('react');

module.exports = React.createClass({
  render: function() {
    return(
      <div className="col-sm-10 col-md-6 col-xs-10 text-right text-uppercase">
        <h1>{this.props.name}</h1>
//        <h4>{this.props.programmerTitle}</h4>
      </div>
    );
  }
});
