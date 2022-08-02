import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import { setSearchValue } from '../../redux/Slices/filterSlise';

import styles from './SearchPanel.module.scss';

const SearchPanel = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.filter);
  const inputRef = useRef();

  const onCLickRef = () => {
    dispatch(setSearchValue(''));
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <div className={`${styles.root} search-panel`}>
      <svg viewBox="0 0 24 24" className={styles.search}>
        <g data-name="Layer 2" id="Layer_2">
          <path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" />
        </g>
      </svg>

      <input
        ref={inputRef}
        value={searchValue}
        onChange={onChangeInput}
        placeholder="Find your pizza..."
        className={styles.input}
      />

      {searchValue && (
        <svg onClick={() => onCLickRef()} className={styles.clear} viewBox="0 0 20 20">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};

export default SearchPanel;
