import React from 'react';
import { Link } from 'react-router-dom';

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

      <Link to="/" className={`${style.button} button button--black`}>
        <span>Back</span>
      </Link>
    </div>
  );
};

export default NotFoundBlock;
