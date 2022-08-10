import { PizzaArr } from '../@types/types';

const filteredBySerch = (itemsArr: PizzaArr[], searchValue: string) => {
  return itemsArr.filter((item) =>
    item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
  );
};

const filteredBySort = (itemsArr: PizzaArr[], sortType: string) => {
  const arrForSort = [...itemsArr];

  switch (sortType) {
    case 'Popular':
      return arrForSort.sort((a, b) => (a.rating > b.rating ? 1 : -1));
    case 'Alphabet (A-Z)':
      return arrForSort.sort((a, b) => (a.name > b.name ? 1 : -1));
    case 'Alphabet (Z-A)':
      return arrForSort.sort((a, b) => (b.name > a.name ? 1 : -1));
    case 'Price (Low-High)':
      return arrForSort.sort((a, b) => (a.price > b.price ? 1 : -1));
    case 'Price (High-Low)':
      return arrForSort.sort((a, b) => (a.price < b.price ? 1 : -1));
    default:
      return arrForSort;
  }
};

const filteredByCategory = (items: PizzaArr[], activeCategory: string) => {
  if (activeCategory === 'All') {
    return items;
  } else {
    return items.filter((item) => item.category === activeCategory.toLocaleLowerCase());
  }
};

export const filteredItems = (
  pizzaArr: PizzaArr[],
  activeSortType: string,
  activeCategory: string,
  searchValue: string,
) => {
  const sortedItems = filteredBySort(pizzaArr, activeSortType);
  const categorizedItems = filteredByCategory(sortedItems, activeCategory);
  const res = filteredBySerch(categorizedItems, searchValue);
  return res;
};
