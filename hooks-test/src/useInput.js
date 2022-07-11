import React, { useReducer } from 'react';

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const useInput = (initStates) => {
  const [state, dispatch] = useReducer(reducer, initStates);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
};

export default useInput;
