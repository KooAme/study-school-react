import React, { useState } from 'react';

const calculateAvg = (arr) => {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, cur) => {
    //acc:초기, cur:첫번째원소
    return acc + cur;
  });
  return sum / arr.length;
};

const Average = () => {
  const [numArr, setNumArr] = useState([]);
  const [num, setNum] = useState('');
  const onChange = (e) => {
    setNum(e.target.value);
  };
  const onInsert = (e) => {
    const newNumArr = numArr.concat(parseInt(num));
    setNumArr(newNumArr); //불변성을 유지하면서 바꿔야하기 때문에 const를 만들어서 해야됩니다.
    setNum('');
  };
  return (
    <>
      <input type='text' value={num} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {numArr.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <div>
        <b>평균값 : </b>
        {calculateAvg(numArr)}
      </div>
    </>
  );
};

export default Average;
