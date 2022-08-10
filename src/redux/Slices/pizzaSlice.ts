import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PizzaArr, PizzaSliceStates } from '../../@types/types';

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

// export const fetchPizzas = createAsyncThunk<PizzaArr[], FetchPizzasArgs>(
//   'pizza/fetchPizzasStatus',
//   async ({ sortObj, pageIndex, categoryId }) => {
//     const { data } = await axios.get<PizzaArr[]>(
//       `https://62de9b69976ae7460bde168f.mockapi.io/pizzas?page=${pageIndex}&limit=3&sortBy=${
//         sortObj.category
//       }&order=${sortObj.sort}${
//         categoryId !== 'All' ? '&category=' + categoryId.toLowerCase() : ''
//       }`,
//     );
//     return data;
//   },
// );

export const fetchPizzas = createAsyncThunk<PizzaArr[]>('pizz/fetchPizzsStatus', async () => {
  const { data } = await axios.get('https://62de9b69976ae7460bde168f.mockapi.io/pizzas');
  return data;
});

const initialState: PizzaSliceStates = {
  items: [],
  status: Status.LOADING,
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
