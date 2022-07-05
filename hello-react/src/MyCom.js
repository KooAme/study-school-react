// import React from 'react';

// const MyCom = (props) => {
//   //({name, hakbun, major}) => {} 이렇게 하고 밑에 const생략가능
//   const { name, hakbun, major } = props;
//   return (
//     <div>
//       <div>
//         안녕하세요 ? 저는 {name} 이고, 학번은 {hakbun} 입니다. <br />
//         전공은 {major} 입니다.
//       </div>
//     </div>
//   );

//   export default MyCom;

import React, { Component } from 'react';
import PropsType from 'prop-types';

class MyCom extends Component {
  render() {
    const { name, hakbun, major } = this.props;
    return (
      <div>
        <div>
          안녕하세요 ? 저는 {name} 이고, 학번은 {hakbun} 입니다. <br />
          전공은 {major} 입니다.
        </div>
      </div>
    );
  }
}

MyCom.defaultProps = {
  name: '일본IT',
  hakbun: 2101032,
};
MyCom.prototype = {
  name: PropsType.string,
  age: PropsType.number,
};

export default MyCom;
