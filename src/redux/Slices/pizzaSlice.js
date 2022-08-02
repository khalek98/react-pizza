import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async ({ sortObj, pageIndex, categoryId }) => {
    const { data } = await axios.get(
      `https://62de9b69976ae7460bde168f.mockapi.io/pizzas?page=${pageIndex}&limit=3&sortBy=${
        sortObj.category
      }&order=${sortObj.sort}${
        categoryId !== 'All' ? '&category=' + categoryId.toLowerCase() : ''
      }`,
    );
    return data;
  },
);

// export const fetchPizzas = createAsyncThunk('pizz/fetchPizzsStatus', () => {
//   axios.get('https://62de9b69976ae7460bde168f.mockapi.io/pizzas').then((res) => {
//     console.log(res.data);
//     return res.data;
//   });
// });

const initialState = {
  items: [],
  status: 'loading', //loading | success | error
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
