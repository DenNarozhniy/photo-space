import {ImgResponsive} from "./img-responsive.model";


export interface Portfolio {
  title: string;
  title_translit: string;
  img_cover_url: ImgResponsive;
  short_description: string;
  isShow: boolean;
  order: number;
  photos: PortPhotos[];
  sameAlbums: string[];
  portfolio_descriptions: PortfolioDescription[];
  _id?: string;
}

export interface PortPhotos {
  url_1: string;
  url_2: string;
  isDouble: boolean;
  isShow: boolean;
  order: number;
  _id?: string;
}

export interface PortfolioDescription {
  title: string;
  text: string;
  ownedByPhoto: string;
  isShow: boolean;
  _id?: string;
}
