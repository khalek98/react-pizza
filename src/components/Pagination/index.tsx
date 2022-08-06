import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

import { setPageIndex } from '../../redux/Slices/filterSlise';
import { RootState } from '../../redux/store';
// import { searchItems } from '../../pages/Home';

import styles from './Pagination.module.scss';

const Pagination = () => {
  const dispatch = useDispatch();
  const { pageIndex } = useSelector((state: RootState) => state.filter);

  // const dispatch = useDispatch();
  // const { pageIndex, searchValue } = useSelector((state) => state.filter);
  // const { items } = useSelector((state) => state.pizza);
  // const visibleItems = searchItems(items, searchValue);

  // const pizzaCount = Math.ceil((searchValue ? visibleItems.length : items.length) / 3) || 1;

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => dispatch(setPageIndex(e.selected + 1))}
      pageRangeDisplayed={3}
      pageCount={4}
      forcePage={pageIndex - 1}
      previousLabel="<"
    />
  );
};

export default Pagination;
