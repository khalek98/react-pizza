import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

import { setPageIndex } from '../../redux/Slices/filterSlise';

import styles from './Pagination.module.scss';

const Pagination = () => {
  const { pageIndex } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => dispatch(setPageIndex(e.selected + 1))}
      pageRangeDisplayed={3}
      pageCount={3}
      forcePage={pageIndex - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
