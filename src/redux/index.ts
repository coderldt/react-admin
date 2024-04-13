import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux'
import tabsReducer from './modules/tabs'
import menuReducer from './modules/menu'
import breadcrumbReducer from './modules/breadcrumb'
import globalReducer from './modules/global'

export const store = configureStore({
  reducer: {
    tabs: tabsReducer,
    menu: menuReducer,
    breadcrumb: breadcrumbReducer,
    global: globalReducer,
  },
})
// 抛出类型 在reducers中使用
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
export const useDispatch = () => useReduxDispatch<AppDispatch>()
