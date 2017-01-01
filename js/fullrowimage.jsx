var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
      <div className='row'>
        <div className='col-xs-12 col-xs-12 col-md-12 background'>
          <img className='img-responsive' src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    );
  }
});
