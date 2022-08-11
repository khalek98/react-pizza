import { FC } from 'react';
import { useSelector } from 'react-redux';
import { setCategoryId, setPageIndex } from '../redux/Slices/filterSlise';
import { RootState, useAppDispatch } from '../redux/store';

const categoriesArr = ['All', 'Grill', 'Meat', 'Vegan', 'Spicy', 'Closed'];

const Catigories: FC = () => {
  const dispatch = useAppDispatch();
  const { categoryId } = useSelector((state: RootState) => state.filter);

  const renderCategoryItems = (arr: string[]) => {
    const newArr = arr.map((label, i) => {
      return (
        <li
          key={i}
          tabIndex={i}
          className={categoryId === label ? 'active' : ''}
          onClick={() => {
            dispatch(setCategoryId(label));
            dispatch(setPageIndex(1));
          }}>
          {label}
        </li>
      );
    });
    return newArr;
  };

  return (
    <div className="categories">
      <ul>{renderCategoryItems(categoriesArr)}</ul>
    </div>
  );
};

export default Catigories;
