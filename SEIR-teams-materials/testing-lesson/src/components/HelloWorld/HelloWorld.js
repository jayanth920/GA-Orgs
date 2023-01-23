import React from 'react';

/**
  FUNCTIONAL COMPONENT
 */
// function HelloWorld(props) {
//   return <h1>{props.name}</h1>;
// }

/**
  CLASS COMPONENT
 */
class HelloWorld extends React.Component {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}

export default HelloWorld;
