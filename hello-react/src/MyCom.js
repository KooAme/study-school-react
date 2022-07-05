import React from 'react';
import PropTypes from 'prop-types';

const MyCom = ({ name, children, favoriteNumber }) => {
  //함수형 컴포넌트
  //({name, hakbun, major}) => {} 이렇게 하고 밑에 const생략가능
  // const { name, children } = props; //비구조화 할당 (구조분해할당)
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다
      <br />
      children 값은 {children} 입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyCom.defaultProps = {
  name: '김동구',
};

MyCom.prototype = {
  //props검증 , props의 타입을 지정할 때 사용
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
  //propTypes를 지정하지 않았을 때 경고 메세지를 띄워 주는 작업
};

export default MyCom;
