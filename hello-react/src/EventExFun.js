import React from 'react';

const EventExFun = () => {
  return (
    <>
      <h1>이벤트연습</h1>
      <input
        type='text'
        name='message'
        placeholder='입력해 주세요'
        onChange={(e) => {
          //e : event객체, SyntheticBaseEvent객체
          console.log(e);
          console.log(e.target.value);
        }}
      />
    </>
  );
};

export default EventExFun;
