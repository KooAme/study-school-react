import React, { Component } from 'react';
import './ValidateExRef.css';

class ValidateExRef extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  onChange = (e) => {
    this.setState({ password: e.target.value });
  };

  onClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === '1234',
    });
    this.inputRef.focus(); //수정
  };
  render() {
    const { password, clicked, validated } = this.state;
    return (
      <>
        <br />
        <input
          type='password'
          //   ref={(ref) => {
          //     this.input.ref = ref;
          //   }}
          value={password}
          onChange={this.onChange}
          className={clicked ? (validated ? 'success' : 'failure') : ''}
        ></input>
        <button onClick={this.onClick}>검증</button>
      </>
    );
  }
}

export default ValidateExRef;
