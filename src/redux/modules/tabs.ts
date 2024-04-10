import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuList } from './menu';

export interface TabsState {
  tabsActive: string;
  tabsList: MenuList[];
}

const tabsState: TabsState = {
  tabsActive: '/welcome',
  tabsList: [{ title: '首页', path: '/welcome' }],
};

const tabsSlice = createSlice({
  name: 'tabs',
  initialState: tabsState,
  reducers: {
    setTabsList(state: TabsState, { payload }: PayloadAction<MenuList[]>) {
      state.tabsList = payload;
    },
    setTabsActive(state: TabsState, { payload }: PayloadAction<string>) {
      state.tabsActive = payload;
    },
  },
});

export const { setTabsList, setTabsActive } = tabsSlice.actions;
export default tabsSlice.reducer;
