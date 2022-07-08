import React, { useState } from 'react';
//useState() Hook
// 사용선언 const [상태명, set상태명] = useState(초기값);
//상태는 Setter함수로만 변경 가능

const Counter = () => {
  const [cnt, setCnt] = useState(0);
  return (
    <>
      <p>
        현 카운터의 값: <b>{cnt}</b>
      </p>
      <button
        onClick={(e) => {
          setCnt(cnt + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={(e) => {
          setCnt(cnt - 1);
        }}
      >
        -1
      </button>
    </>
  );
};

export default Counter;
