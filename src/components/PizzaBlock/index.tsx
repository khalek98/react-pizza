import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { CartItem } from '../../@types/types';
// import classNames from 'classnames';

import {
  addItem,
  decItem,
  removeItem,
  selectCartItemById,
} from '../../redux/Slices/cartSlice';

export const typeNames = ['thin', 'traditional', 'philadelphia'];
const priceIncreace = {
  types: {
    thin: 0,
    traditional: 3,
    philadelphia: 5,
  },
  sizes: {
    '26': 0,
    '30': 3,
    '40': 5,
  },
};

export type PizzaBlockProps = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: string[];
  rating: number;
  counter?: number;
};

const PizzaBlock: FC<PizzaBlockProps> = (props) => {
  return (
    <div className="pizza-block">
      <Link to={`/pizza/${props.id}`}>
        <img className="pizza-block__image" src={props.imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{props.name}</h4>
      </Link>
      <SelectorBlock {...props} />
    </div>
  );
};

export const SelectorBlock: FC<PizzaBlockProps> = ({
  id,
  name,
  imageUrl,
  price,
  sizes,
}) => {
  const [activeType, setActiveType] = useState<string>('thin');
  const [activeSize, setActiveSize] = useState(0);
  const addedItem = useSelector(
    selectCartItemById(`${id}-${activeType}-${activeSize}`),
  );
  const addedCount = addedItem ? addedItem.count : null;

  const increcedPrice =
    //@ts-ignore
    price + priceIncreace.types[activeType] + priceIncreace.sizes[activeSize];

  const dispatch = useDispatch();

  useEffect(() => {
    setActiveSize(sizes[0]);
    // eslint-disable-next-line
  }, []);

  const onAddItem = () => {
    const item: CartItem = {
      id: `${id}-${activeType}-${activeSize}`,
      name,
      price: increcedPrice,
      imageUrl,
      type: activeType,
      size: activeSize,
      count: 1,
    };
    dispatch(addItem(item));
  };

  // const onIncItem = () => {
  //   dispatch(addItem({ id: `${id}-${activeType}-${sizes[activeSize]}` } as CartItem));
  // };

  const onDecItem = () => {
    if (addedCount && addedCount - 1 <= 0) {
      dispatch(removeItem(`${id}-${activeType}-${activeSize}`));
    } else {
      dispatch(decItem(`${id}-${activeType}-${activeSize}`));
    }
  };

  return (
    <>
      <div className="pizza-block__selector">
        <ul>
          {typeNames.map((type, i) => {
            return (
              <li
                key={i}
                className={classNames('pizza-block__selector-type', {
                  active: activeType === type,
                })}
                onClick={() => setActiveType(type)}
              >
                {type}
                {i !== 0 && type === activeType && (
                  <div className="price-increase">
                    {/* @ts-ignore */}
                    {/* @ts-ignore */}+{priceIncreace.types[activeType]} $
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              key={i}
              onClick={() => setActiveSize(size)}
              className={size === activeSize ? 'active' : ''}
            >
              {size}cm
              {i !== 0 && size === activeSize && (
                <div className="price-increase">
                  {/* @ts-ignore */}
                  {/* @ts-ignore */}+{priceIncreace.sizes[activeSize]} $
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">price: {increcedPrice} $</div>
        {addedCount ? (
          <div className="cart__wrapper cart__wrapper-bottom">
            <div className="cart__item-count">
              <div
                onClick={onDecItem}
                className="button button--outline button--circle cart__item-count-minus"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                    fill="#EB5A1E"
                  />
                  <path
                    d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                    fill="#EB5A1E"
                  />
                </svg>
              </div>
              <b>{addedCount}</b>
              <div
                onClick={onAddItem}
                className="button button--outline button--circle cart__item-count-plus"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                    fill="#EB5A1E"
                  />
                  <path
                    d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                    fill="#EB5A1E"
                  />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="button button--outline button--add"
            onClick={onAddItem}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Add</span>
          </div>
        )}
      </div>
    </>
  );
};

export default PizzaBlock;
