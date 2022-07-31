import { useContext, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import Catigories from '../components/Catigories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { setFilters } from '../redux/Slices/filterSlise';
import { setItems } from '../redux/Slices/pizzaSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigte = useNavigate();

  const { items } = useSelector((state) => state.pizza);
  const { categoryId, sortType, pageIndex } = useSelector((state) => state.filter);
  const [isLoading, setIsLoading] = useState(false);
  const { searchValue } = useContext(SearchContext);
  const isMounted = useRef(false);
  const isUrl = useRef(false);

  const searchItem = () =>
    items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));

  const visibleItems = searchItem();

  const sortFunc = (sortType) => {
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

  const fetchPizzas = async () => {
    setIsLoading(true);
    const sortObj = sortFunc(sortType);

    try {
      const { data } = await axios.get(
        `https://62de9b69976ae7460bde168f.mockapi.io/pizzas?page=${pageIndex}&limit=3&sortBy=${
          sortObj.category
        }&order=${sortObj.sort}${
          categoryId !== 'All' ? '&category=' + categoryId.toLowerCase() : ''
        }`,
      );
      dispatch(setItems(data));
    } catch (error) {
      console.log(error);
      alert('Something went wrong... Try later');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortType,
        categoryId,
        pageIndex,
      });

      navigte(`?${queryString}`);
    }
    isMounted.current = true;
    // eslint-disable-next-line
  }, [sortType, categoryId, pageIndex]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setFilters(params));
      isUrl.current = true;
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isUrl.current) {
      fetchPizzas();
    }
    isUrl.current = false;
    // eslint-disable-next-line
  }, [sortType, categoryId, pageIndex]);

  return (
    <>
      <div className="content__top">
        <Catigories />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((_, i) => <Skeleton key={i} />)
          : visibleItems.map((pizza, i) => {
              return <PizzaBlock key={i} {...pizza} />;
            })}
      </div>
      <Pagination />
    </>
  );
};

export default Home;
