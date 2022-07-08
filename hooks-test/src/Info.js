import React, { useState, useEffect, useReducer } from 'react';

const uInfoUp = (state, action) => {
  return {
    ...state,
    [action.name]: action.value, //input의 name을 action의 value로 넣는다.
    //action은 onChange의 e.target이다. -중요-
    // action === e.target
  };
};

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [rObj, setRObjAction] = useReducer(uInfoUp, {
    name1: '',
    nickname1: '',
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  const onChange = (e) => {
    setRObjAction(e.target);
  };

  const { name1, nickname1 } = rObj; //객체임

  //   useEffect(() => {
  //     console.log('렌더링 완료');
  //     console.log({ name, nickname });
  //   }, []);
  //   useEffect(() => {
  //     console.log('이름 변경');
  //     console.log({ name, nickname });
  //   }, [name]);
  //   useEffect(() => {
  //     console.log('이름 변경');
  //     console.log({ name, nickname });
  //   }, [nickname]);
  useEffect(() => {
    console.log('렌더링 완료'); //보여질때 (마운트할때)
    console.log({ name, nickname });
    return () => {
      console.log('언마운트'); //안보일때 (언마운트할때)
      console.log({ name, nickname });
    };
  });
  return (
    <>
      <div>
        <input type='text' value={name} onChange={onChangeName} />
        <br />
        <input type='text' value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <b>이름 : </b>
        {name}
      </div>

      <div>
        <b>닉네임 : </b>
        {nickname}
      </div>
      <br />
      <hr />
      <br />
      <div>
        <input type='text' name='name1' value={name1} onChange={onChange} />
        <br />
        <input
          type='text'
          name='nickname1'
          value={nickname1}
          onChange={onChange}
        />
      </div>
      <div>
        <b>이름 : </b>
        {name1}
      </div>

      <div>
        <b>닉네임 : </b>
        {nickname1}
      </div>
    </>
  );
};

export default Info;
