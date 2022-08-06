import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, SortType } from '../../@types/types';



const initialState: FilterSliceState = {
  categoryId: 'All',
  searchValue: '',
  sortType: 'Popular',
  pageIndex: 1,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<string>) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSortType(state, action: PayloadAction<SortType>) {
      state.sortType = action.payload;
    },
    setPageIndex(state, action: PayloadAction<number>) {
      state.pageIndex = Number(action.payload);
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
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
