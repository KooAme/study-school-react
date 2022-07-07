import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: 'Koo' },
    { id: 2, text: 'Aya' },
    { id: 3, text: 'Bori' },
  ]);
  const [inputTag, setInputTag] = useState('');
  const [nextId, setNextId] = useState(4);

  const onChange = (e) => {
    setInputTag(e.target.value);
  };
  const namesList = names.map((name, index) => {
    return (
      <li
        key={name.id}
        onDoubleClick={(e) => {
          RmItem(name.id);
        }}
      >
        {name.text}
      </li>
    );
  });
  const onClick = (e) => {
    const newNames = names.concat({ id: nextId, text: inputTag });
    //names.push()는 처리안됨. names의 값은 힙 heap에 있어서 값이 안바껴있음. 상태불변성
    setNextId(nextId + 1);
    setNames(newNames);
    setInputTag('');
  };

  const RmItem = (id) => {
    //더블클릭한것 외에는 다 true , 새로운배열생성
    const newNames = names.filter((name, index) => {
      return name.id !== id;
    });
    setNames(newNames);
  };

  return (
    <>
      <input type='text' value={inputTag} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
