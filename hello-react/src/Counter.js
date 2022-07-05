import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    //state의 초기값 설정하기
    this.state = {
      number: 0,
    };
  }
  render() {
    const { number } = this.state; //state를 조회할 때는 this.state 조회
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
            this.setState({ number: number + 1 }); //비동기라서 +1만 됨
          }}
        >
          +1
        </button>
        <button
          //   onClick={() => {
          //     this.setState({ number: number + 1 });
          //     this.setState({ number: this.state.number + 1 }); //this.state를 사용한다고 해서 state값이 바로 바뀌지는 않기 때문에 +1만 됨
          //   }}
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
            //this.state를 사용한다고 해서 state값이 바로 바뀌지는 않기 때문에 +1만 됨
          }}
        >
          +2
        </button>
      </div>
    );
  }
}

export default Counter;
