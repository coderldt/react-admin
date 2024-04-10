import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BreadcrumbState {
  breadcrumbList: {
    [propName: string]: string[];
  };
}

const breadcrumbState: BreadcrumbState = {
  breadcrumbList: {},
};

const breadcrumbSlice = createSlice({
  name: 'breadcrumb',
  initialState: breadcrumbState,
  reducers: {
    setBreadcrumbList(state: BreadcrumbState, { payload }: PayloadAction<{ [propName: string]: string[] }>) {
      state.breadcrumbList = payload;
    },
  },
});

export const { setBreadcrumbList } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;
