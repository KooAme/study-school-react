import React from 'react';

const MapTestComFun = () => {
  const fruits = [
    '키위',
    '사과',
    '코코넛',
    '배',
    '참외',
    '용과',
    '수박',
    '메론',
  ];
  const fruitsList = fruits.map((fruit, index) => {
    return (
      <li
        key={index} //key를 줘야 콘솔에서 에러가 안뜸 (실행은 됨)
        //리액트는 버츄얼돔인데 키값이 없으면, 배열에서 무언가 지워지면 못찾음. (속도차이가 남)
      >
        {fruit}
      </li>
    );
  });
  return (
    <>
      <ul>{fruitsList}</ul>
    </>
  );
};

export default MapTestComFun;
