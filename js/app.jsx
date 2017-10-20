var React = require('react');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

class Logo extends React.Component {
  render(){
    return(
      <div>
        <a target="_blank" href={this.props.link}>
          <img className='logo logo-element' width='100' height='100' src={this.props.src} alt={this.props.alt} />
        </a>
      </div>
    );
  }
}

class NameAndTitle extends React.Component {
  render(){
    return(
      <div marginHeight='0'>
        <h1 className='logo text-thin text-right text-uppercase'> Shuchen Liu</h1>
        <h4 className='text-right text-uppercase logo-text'> A Full-Stack Programmer-to-Be</h4>
      </div>
    );
  }
}

class FullRowImage extends React.Component {
  render(){
    return(
      <img className='img-responsive' src={this.props.src} alt={this.props.alt} />
    );
  }
}


class ImageWithTextBlock extends React.Component {
  textList(text) {
    console.log(text);
    var l = [];
    for (var i = 0; i < text.length - 1; i++) {
      l.push(text[i]);
      l.push(React.createElement('span',
                                {className: 'span-spacing',
                                key:i +'A'})
                              );
      l.push(React.createElement('br',
                                {key:i.toString()})
                              );
      l.push(React.createElement('span',
                                {className: 'span-spacing', key:i+'B'})
                              );
    }
    l.push(text[text.length - 1]);
    //console.log(l);
    return l;
  }

  render(){
    return(
      <Row className={this.props.className}>
        <FullRowImage src={this.props.src} alt={this.props.alt} />
          <h2 className={this.props.textClass}>
            <span className={this.props.spanClass}>
              {this.textList(this.props.text.list)}
            </span>
          </h2>
      </Row>
    );
  }
}

var emoryLogo = <Logo src='/img/emory-logo.png' alt='Emory Logo' link='http://www.emory.edu'/>;
var shuchenLiu = <NameAndTitle />;
var atl = <ImageWithTextBlock
          className='backgroundImage'
          textClass='textClass'
          spanClass='spanClass'
          src='img/atl-skyline.jpeg'
          alt='Atlanta Skyline'
          text={
            {list: ('We run things, $ things dont run we.').split('$')}
          }
          />;

var App = React.createClass({
  render: function(){
    return(
      <Grid>
        <Row className="logo-row">
          <Col className='logo-wrap' xs={3} sm={3} md={2}>
            {emoryLogo}
          </Col>
          <Col xs={9} sm={9} md={10}>
            {shuchenLiu}
          </Col>
        </Row>
        {atl}
      </Grid>
    );
  }
});

module.exports = App;
