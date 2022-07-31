import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 'All',
  sortType: 'Popular',
  pageIndex: 1,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setPageIndex(state, action) {
      state.pageIndex = Number(action.payload);
    },
    setFilters(state, { payload }) {
      state.sortType = payload.sortType ? payload.sortType : state.sortType;
      state.categoryId = payload.categoryId ? payload.categoryId : state.categoryId;
      state.pageIndex = payload.pageIndex ? Number(payload.pageIndex) : state.pageIndex;
    },
  },
});

export const { setCategoryId, setSortType, setFilters, setPageIndex } = filterSlice.actions;

export default filterSlice.reducer;
