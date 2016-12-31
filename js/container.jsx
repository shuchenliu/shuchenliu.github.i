var React = require('react');
var Logo = require('./icon.jsx');
var Myname = require('./myname.jsx');
var FullRowImage = require('./fullrowimage.jsx');
module.exports = React.createClass({
  render: function() {
//    console.log(Emorylogo);
    var emoryicon = <Logo className="col-sm-2 col-md-6 col-xs-2 logo-row" src="img/emory-logo.png" alt="Emory Logo" />;
    var name =
      <Myname
        className="col-sm-10 col-md-6 col-xs-10 logo-row text-right text-uppercase"
        textThin="text-thin"
        name="Shuchen Liu"
        programmerTitle="A Full-Stack Programmer To Be"
      />;

    var AtlantaImg = <FullRowImage
                      src="img/atl-skyline.jpeg"
                      alt="Atlanta Skyline"
                      floatText="Test"/>;
    return(
        <div className="container">
          <div className="row">
            {emoryicon}
            {name}
          </div>
          {AtlantaImg}
        </div>
      );
  }
});
