import {createAction} from '@reduxjs/toolkit';
import {TCity, TPlaceCard, TPlaceCardFull, TReview, TUserFull} from '../utils/types.ts';
import {Actions, LoadingStatus} from '../utils/const.ts';

export const changeCity = createAction<TCity>(`${Actions.CITY}/change`);

export const fillOffers = createAction<TPlaceCard[]>(`${Actions.OFFERS}/fill`);
export const setOffersLoadingStatus = createAction<LoadingStatus>(`${Actions.OFFERS}/loading`);

export const setNearbyOffers = createAction<TPlaceCard[]>(`${Actions.OFFERS}/nearby`);
export const clearNearbyOffers = createAction(`${Actions.OFFERS}/clearNearby`);

export const setOffer = createAction<TPlaceCardFull>(`${Actions.OFFER}/set`);
export const clearOffer = createAction(`${Actions.OFFER}/clear`);
export const setOfferLoadingStatus = createAction<LoadingStatus>(`${Actions.OFFER}/loading`);

export const setAuthorizationStatus = createAction<boolean>(`${Actions.USER}/authorization`);
export const setUserData = createAction<TUserFull>(`${Actions.USER}/setData`);
export const clearUserData = createAction(`${Actions.USER}/clear`);

export const setComments = createAction<TReview[]>(`${Actions.COMMENTS}/set`);
export const clearComments = createAction(`${Actions.COMMENTS}/clear`);
export const setCommentsLoadingStatus = createAction<LoadingStatus>(`${Actions.COMMENTS}/loading`);
