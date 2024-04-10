import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuList } from './menu';

export interface CurrentUser {
  username?: string
}

export interface GlobalState {
  user: CurrentUser;
  authRouter: string[];
  menuData: MenuList[];
  menuLoading: boolean;
}

const globalState: GlobalState = {
  user: {
    username: 'iihll'
  },
  authRouter: [],
  menuData: [],
  menuLoading: true,
};

const globalSlice = createSlice({
  name: 'menu',
  initialState: globalState,
  reducers: {
    updateUser(state: GlobalState, { payload }: PayloadAction<CurrentUser>) {
      state.user = payload;
    },

    setAuthRouter(state: GlobalState, { payload }: PayloadAction<string[]>) {
      window.localStorage.setItem('authRouter', payload.join(','));
      state.authRouter = payload;
    },
    setMenuData(state: GlobalState, { payload }: PayloadAction<MenuList[]>) {
      state.menuData = payload;
    },
    setMenuLoading(state: GlobalState, { payload }: PayloadAction<boolean>) {
      state.menuLoading = payload;
    },
  },
});

export default globalSlice.reducer;
export const { updateUser, setAuthRouter, setMenuData, setMenuLoading } = globalSlice.actions;
