import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {createAPI} from '../api/api.ts';
import {State} from './state.ts';


type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const initAsyncActionsStore = () => {
  const axios = createAPI();
  const mockAxios = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);

  return {mockAxios, mockStoreCreator};
};