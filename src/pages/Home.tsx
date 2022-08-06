import { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import Catigories from '../components/Catigories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { setFilters } from '../redux/Slices/filterSlise';
import { fetchPizzas } from '../redux/Slices/pizzaSlice';
import { RootState, useAppDispatch } from '../redux/store';
import { FilterSliceState } from '../@types/types';

// export const searchItems = (arr, searchValue) =>
//   arr.filter((item) => {
//     return item.name.toLowerCase().includes(searchValue.toLowerCase());
//   });

// export const myFunc = (pizzasArr, pageIndex, viewCount) => {
//   const newArr = [];
//   const offset = (pageIndex - 1) * viewCount;
//   const length = pizzasArr.length - offset;

//   try {
//     for (let i = 0; i < (length < viewCount ? length : viewCount); i++) {
//       newArr.push(pizzasArr[i + offset]);
//     }
//     return newArr;
//   } catch (error) {
//     console.log(error);
//     return newArr;
//   }
// };

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const navigte = useNavigate();
  const isMounted = useRef(false);
  const isUrl = useRef(false);

  const { items, status } = useSelector((state: RootState) => state.pizza);
  const { categoryId, sortType, pageIndex } = useSelector((state: RootState) => state.filter);
  const { searchValue } = useSelector((state: RootState) => state.filter);

  const searchItem = () =>
    items.filter((item: { name: string }) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()),
    );

  const visibleItems = searchItem();

  const sortFunc = (sortType: string) => {
    switch (sortType) {
      case 'Popular':
        return {
          category: 'rating',
          sort: 'asc',
        };
      case 'Alphabet (A-Z)':
        return {
          category: 'name',
          sort: 'asc',
        };
      case 'Alphabet (Z-A)':
        return {
          category: 'name',
          sort: 'desc',
        };
      case 'Price (Low-High)':
        return {
          category: 'price',
          sort: 'asc',
        };
      case 'Price (High-Low)':
        return {
          category: 'price',
          sort: 'desc',
        };
      default:
        return {
          category: 'rating',
          sort: 'asc',
        };
    }
  };

  const getPizzas = async () => {
    const sortObj = sortFunc(sortType);

    dispatch(
      fetchPizzas({
        sortObj,
        pageIndex,
        categoryId,
      }),
    );
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        pageIndex,
        sortType,
        categoryId,
      });

      navigte(`?${queryString}`);
    }
    isMounted.current = true;
    // eslint-disable-next-line
  }, [sortType, categoryId, pageIndex]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as unknown as FilterSliceState;
      dispatch(setFilters(params));
      isUrl.current = true;
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isUrl.current) {
      getPizzas();
    }
    isUrl.current = false;
    // eslint-disable-next-line
  }, [sortType, categoryId, pageIndex]);

  // =====================  v2 ========================================

  // const dispatch = useDispatch();
  // const { items, status } = useSelector((state) => state.pizza);
  // const { searchValue, pageIndex, categoryId } = useSelector((state) => state.filter);

  // const filteredItems =
  //   categoryId === 'All'
  //     ? items
  //     : items.filter((item) => item.category === categoryId.toLowerCase());

  // const visibleItems = myFunc(searchItems(filteredItems, searchValue), pageIndex, 3);

  // const getPizzas = async () => {
  //   dispatch(fetchPizzas());
  // };

  // useEffect(() => {
  //   getPizzas();
  //   // eslint-disable-next-line
  // }, []);

  // =====================  v2 ========================================

  return (
    <>
      <div className="content__top">
        <Catigories />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>
            Something wents wrong <span>😕</span>
          </h2>
          <p>Unfortunately, the pizzas couldn't be loaded. Try again later.</p>
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading'
            ? [...new Array(4)].map((_, i) => <Skeleton key={i} />)
            : visibleItems.map((pizza, i: number) => {
                return <PizzaBlock key={i} {...pizza} />;
              })}
        </div>
      )}
      <Pagination />
    </>
  );
};

export default Home;
