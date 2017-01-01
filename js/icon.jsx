var React = require('react');

module.exports = React.createClass({
  render: function() {
  //  console.log("sbzzmf");
    return (
      <div className={this.props.className}>
          <img width="100" height="100" src={this.props.src} alt={this.props.alt}/>
      </div>
    );
  }
});
