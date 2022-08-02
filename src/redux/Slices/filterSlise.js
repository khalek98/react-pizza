import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 'All',
  searchValue: '',
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
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setPageIndex(state, action) {
      state.pageIndex = Number(action.payload);
    },
    setFilters(state, action) {
      const { sortType, categoryId, pageIndex } = action.payload;

      state.sortType = sortType ? sortType : state.sortType;
      state.categoryId = categoryId ? categoryId : state.categoryId;
      state.pageIndex = pageIndex ? Number(pageIndex) : state.pageIndex;
    },
  },
});

export const { setCategoryId, setSortType, setFilters, setPageIndex, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
