import React, { useReducer } from 'react';

const calculate = (state, action) => {
  switch (action.type) {
    case '더하기':
      return { value: state.value + 1 };
    case '빼기':
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const ReducerStd = () => {
  const [cnt, setCntAction] = useReducer(calculate, { value: 0 });
  return (
    <>
      <p>
        현 카운터의 값: <b>{cnt.value}</b>
      </p>
      <button
        onClick={(e) => {
          setCntAction({ type: '더하기' });
        }}
      >
        +1
      </button>
      <button
        onClick={(e) => {
          setCntAction({ type: '빼기' });
        }}
      >
        -1
      </button>
    </>
  );
};

export default ReducerStd;
