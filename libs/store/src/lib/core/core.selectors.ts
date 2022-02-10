import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoreState } from './core.state';
import { IPortfolioDetailData } from '@photo-space/models';

export const featureSelector = createFeatureSelector<CoreState>('core');

export const getAvailableAboutMe = createSelector(featureSelector, (state: CoreState) => state.aboutMe.find(item => item.isShow));
export const getAdvantages = createSelector(featureSelector, (state: CoreState) => state.advantages);
export const getContactInfo = createSelector(featureSelector, (state: CoreState) => state.contactInfo);
export const getPhotoServices = createSelector(featureSelector, (state: CoreState) => state.photoServices);
export const getPortfolio = createSelector(featureSelector, (state: CoreState) => state.portfolio);

export const getPortfolioDetail = createSelector(featureSelector, (state: CoreState, props): IPortfolioDetailData => {
  const current = state.portfolio.filter(item => item.title_translit === props.name);
  if (current && current[0]) {
    const albums = [];
    current[0].sameAlbums.map(id => {
      state.portfolio.map(album => {
        if (id === album._id) {
          albums.push(album);
        }
      });
    });
    return { same: albums, current: current[0] };
  } else {
    return { same: [], current: null};
  }
});

