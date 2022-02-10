import { Advantage, AboutMe, ContactInfo, PhotoServiceItem, Portfolio } from '@photo-space/models';


export interface CoreState {
  advantages: Advantage[];
  aboutMe: AboutMe[];
  contactInfo: ContactInfo;
  photoServices: PhotoServiceItem[];
  portfolio: Portfolio[];
}

export const initializeCoreState = (): CoreState => {
  return {
    advantages: [],
    aboutMe: [],
    contactInfo: null,
    photoServices: [],
    portfolio: [],
  };
};
