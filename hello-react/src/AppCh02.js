import React, { useState } from 'react';
import Info from './Info';

function AppCh02() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </>
  );
}

export default AppCh02;
