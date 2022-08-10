export interface FilterSliceState {
  categoryId: string;
  searchValue: string;
  sortType: SortType;
  pageIndex: number;
}

export type SortType =
  | 'Popular'
  | 'Alphabet (A-Z)'
  | 'Alphabet (Z-A)'
  | 'Price (High-Low)'
  | 'Price (Low-High)';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

export type SortObjType = {
  category: string;
  sort: string;
};

export type FetchPizzasArgs = {
  sortObj: SortObjType;
  pageIndex: number;
  categoryId: string;
};

export type PizzaArr = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: string[];
  rating: number;
  category: string;
  counter?: number;
};

export interface PizzaSliceStates {
  items: PizzaArr[];
  status: 'loading' | 'success' | 'error';
}
