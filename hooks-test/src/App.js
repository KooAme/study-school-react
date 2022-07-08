import React, { useState } from 'react';
import Counter from './Counter';
import Info from './Info';
import ReducerStd from './ReducerStd';
import Average from './Average';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Counter></Counter>
      <br />
      <br />
      <button
        onClick={(e) => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info></Info>}

      <br />
      <ReducerStd></ReducerStd>
      <br />
      <Average></Average>
    </>
  );
}

export default App;
