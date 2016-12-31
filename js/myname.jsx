var React = require('react');

module.exports = React.createClass({
  render: function() {
    return(
      <div className={this.props.className}>
        <h1 className={this.props.textThin}>{this.props.name}</h1>
        <h4>{this.props.programmerTitle}</h4>
      </div>
    );
  }
});
