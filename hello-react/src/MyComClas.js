import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComClas extends Component {
  static defaultProps = {
    name: '김동구',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, children, favoriteNumber } = this.props; //비구조화
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children값은 {children}입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

// MyComClas.defaultProps = {
//   name: '김동구',
// };

// MyComClas.prototype = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// }; 클래스형 컴포넌트에서는 class내부에서 지정하는 방법도 있습니다.
// defaultProps, propTypes 사용은 필수사용은 아니지만, 큰 규모의 프로젝트를 할 때,
// 다른개발자들과 협업한다면 해당 컴포넌트에 어떤 props가 필요한지 쉽게 알 수 있어 개발 능률이 좋아짐
export default MyComClas;
