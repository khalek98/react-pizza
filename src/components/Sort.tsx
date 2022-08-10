import { FC, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SortType } from '../@types/types';

import { setSortType } from '../redux/Slices/filterSlise';
import { RootState } from '../redux/store';

const sortArr: SortType[] = [
  'Popular',
  'Alphabet (A-Z)',
  'Alphabet (Z-A)',
  'Price (High-Low)',
  'Price (Low-High)',
];

const Sort: FC = () => {
  const dispatch = useDispatch();

  const [sortPopup, setSortPopup] = useState(false);
  const { sortType } = useSelector((state: RootState) => state.filter);
  const sortRef = useRef<HTMLDivElement>(null);

  const onSetSort = (sortName: SortType) => {
    dispatch(setSortType(sortName));
    setSortPopup(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
        setSortPopup(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div onClick={() => setSortPopup(!sortPopup)} className="sort__label">
        <svg
          style={sortPopup ? { transform: 'rotateX(180deg)' } : {}}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by:</b>
        <span>{sortType}</span>
      </div>
      {sortPopup && (
        <div className="sort__popup">
          <ul>
            {sortArr.map((sort, i) => {
              return (
                <li
                  key={i}
                  className={sortType === sort ? 'active' : ''}
                  onClick={() => onSetSort(sort)}>
                  {sort}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
