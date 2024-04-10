import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MenuList {}

export interface MenuState {
  isCollapse: boolean;
  menuList: MenuList[];
}

const menuState: MenuState = {
  isCollapse: false,
  menuList: [],
};

const menuSlice = createSlice({
  name: 'menu',
  initialState: menuState,
  reducers: {
    updateCollapse(state: MenuState, { payload }: PayloadAction<boolean>) {
      state.isCollapse = payload;
    },
    setMenuList(state: MenuState, { payload }: PayloadAction<MenuList[]>) {
      window.localStorage.setItem('menuList', JSON.stringify(payload));
      state.menuList = payload;
    },
  },
});

export default menuSlice.reducer;
export const { updateCollapse, setMenuList } = menuSlice.actions;
