import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button className="btn btn-success">
        {this.props.text ?
        (this.props.text ) : ('Texte par défaut')}
      </button>
    );
  }
}

export default Button;