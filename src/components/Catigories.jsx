import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/Slices/filterSlise.js';

const Catigories = () => {

  const dispatch = useDispatch();
  const { categoryId } = useSelector((state) => state.filter);

  const categoriesArr = ['All', 'Grill', 'Meat', 'Vegan', 'Spicy', 'Closed'];

  const renderCategoryItems = (arr) => {
    const newArr = arr.map((label, i) => {
      return (
        <li
          key={i}
          tabIndex={i}
          className={categoryId === label ? 'active' : ''}
          onClick={() => dispatch(setCategoryId(label))}>
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
