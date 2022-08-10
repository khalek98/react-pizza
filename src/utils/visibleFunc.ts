import { PizzaArr } from '../@types/types';

export const visibleFunc = (pizzaArr: PizzaArr[], pageIndex: number, viewCount: number) => {
  const newArr = [];
  const offset = (pageIndex - 1) * viewCount;
  const length = pizzaArr.length - offset;

  try {
    for (let i = 0; i < (length < viewCount ? length : viewCount); i++) {
      newArr.push(pizzaArr[i + offset]);
    }
    return newArr;
  } catch (error) {
    console.log(error);
    return newArr;
  }
};
