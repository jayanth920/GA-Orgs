var React = require("react");
var ReactDOM = require("react-dom");

var Button = React.createClass({
  getInitialState: function() {
    return {clicked: false};
  },
  handleClick: function(event) {
    this.setState({
      clicked: !this.state.clicked

    });
  },
  render: function() {
    var reactImage = this.state.clicked ? <Image /> : '';
    return (
      <div style={{height: '900px', margin: 'auto 0', textAlign: 'center', backgroundColor: 'rgba(0,0,0,.2)'}}>
    	<div>
        <p style={{fontSize: '50px'}}> React is awesome </p>
        <button style={{fontSize: '50px'}} type="submit" onClick={this.handleClick}>
        See Pic!
        </button>
        <p>{reactImage}</p>
      </div>
      </div>
    );
  }
});

var Image = React.createClass({
  render: function(){
    return(
      <img src="https://facebook.github.io/react/img/logo.svg"></img>
    )
  }
})



ReactDOM.render(
  <Button />,
  document.getElementById('app')
);
