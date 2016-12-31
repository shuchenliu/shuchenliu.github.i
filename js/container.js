var React = require('react');
var emoryIcon = require('./icon.js');
var myname = require('./myname.js');
module.exports = React.createClass({
  render: function() {
    var icon = <emoryIcon src="img/emory-logo.png"/>;
    var name = <myname name="Shuchen Liu"/>;
    return(
      <div className="container">
        <div className="row">
          {icon}
          {name}
        </div>
      </div>
    );
  }
});
