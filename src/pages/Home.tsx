import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Categories, Pagination, PizzaBlock, Skeleton, Sort } from '../components';

import { RootState, useAppDispatch } from '../redux/store';
import { fetchPizzas } from '../redux/Slices/pizzaSlice';
import { filteredItems } from '../utils/filteredItemsFunc';
import { visibleFunc } from '../utils/visibleFunc';

export const amountVisiblePiizas = 3;

const Home: FC = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector((state: RootState) => state.pizza);
  const { categoryId, sortType, searchValue, pageIndex } = useSelector(
    (state: RootState) => state.filter,
  );

  useEffect(() => {
    dispatch(fetchPizzas());
    // eslint-disable-next-line
  }, []);

  const resFilteredItems = filteredItems(items, sortType, categoryId, searchValue);
  const visibleItems = visibleFunc(resFilteredItems, pageIndex, amountVisiblePiizas);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">{categoryId} pizzas</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>
            Something went wrong <span>😕</span>
          </h2>
          <p>Unfortunately, the pizzas couldn't be loaded. Try again later.</p>
        </div>
      ) : (
        <>
          {status === 'loading' ? (
            <div className="content__items">
              {[...new Array(4)].map((_, i) => (
                <Skeleton key={i} />
              ))}
            </div>
          ) : visibleItems.length === 0 ? (
            <div className="content">
              <h2>
                In category <span>"{categoryId}"</span> pizza: "<span>{searchValue}</span>" is not
                found
              </h2>
            </div>
          ) : (
            <>
              <TransitionGroup className="content__items">
                {visibleItems.map((pizza) => (
                  <CSSTransition key={pizza.id} timeout={300} classNames="my-pizza">
                    <PizzaBlock key={pizza.id} {...pizza} />
                  </CSSTransition>
                ))}
              </TransitionGroup>
              <Pagination />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Home;
