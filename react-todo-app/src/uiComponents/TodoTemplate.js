import React from 'react';
import './TodoTemplates.scss';

const TodoTemplate = ({ children }) => {
  //const TodoTemplate = (props) => {
  //const { children } = props;
  return (
    <>
      <div className="TodoTemplate">
        <div className="app-title">일정관리 APP</div>
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default TodoTemplate;
