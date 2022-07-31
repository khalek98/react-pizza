import React from 'react';

import style from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={style.root}>
      <h1>
        <span>😕</span>
        <br />
        Anything not found
      </h1>

      <p className={style.description}>Sory, the request page does not exist</p>
    </div>
  );
};

export default NotFoundBlock;
