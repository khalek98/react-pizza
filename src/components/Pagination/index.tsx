import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll } from 'react-scroll';

import { amountVisiblePiizas } from '../../pages/Home';
import { setPageIndex } from '../../redux/Slices/filterSlise';
import { RootState } from '../../redux/store';
import { filteredItems } from '../../utils/filteredItemsFunc';

import styles from './Pagination.module.scss';

const Pagination = () => {
  const dispatch = useDispatch();
  const { pageIndex, sortType, categoryId, searchValue } = useSelector(
    (state: RootState) => state.filter,
  );

  const { items } = useSelector((state: RootState) => state.pizza);

  const resFilteredItems = filteredItems(items, sortType, categoryId, searchValue);

  const pageCount =
    Math.ceil(
      (searchValue || categoryId ? resFilteredItems.length : items.length) / amountVisiblePiizas,
    ) || 1;

  // console.log(pageCount);

  const handleSetPage = (selected: number) => {
    dispatch(setPageIndex(selected));
    animateScroll.scrollTo(50, { duration: 600, smooth: true, isDynamic: true });
  };

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => handleSetPage(e.selected + 1)}
      pageCount={pageCount}
      forcePage={pageIndex - 1}
      previousLabel="<"
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
    />
  );
};

export default Pagination;
