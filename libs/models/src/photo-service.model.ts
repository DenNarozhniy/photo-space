import { ImgResponsive } from './img-responsive.model';

export interface PhotoServiceItem {
  main_title: string;
  sub_seo_title: string;
  name_ru: string;
  name_en: string;
  price_header: string;
  img_cover: ImgResponsive;
  description_title: string;
  main_description: string;
  order: number;
  isShow: boolean;
  fares: FareServiceItem[];
  fare_calculator_items: {
    title: string;
    currency: string;
    description: string;
    calculatorServices: ICalculatorService[];
  };
  _id?: string;
}

export interface FareServiceItem {
  main_title: string;
  price: number;
  hoursDuration: number;
  currency: string;
  add_info: IAddInfo[];
  addServices: IAddServices[];
  order: number;
  isShow: boolean;
  fareDescriptions?: FareServiceDescriptionItem[];
  _id?: string;
}

export interface IAddServices {
  price: number;
  title: string;
  description: string;
  selectedByDefault: boolean;
  isShow: boolean;
  isFroze: boolean;
  order: number;
  _id?: string;
}

export interface IAddInfo {
  title: string;
  text: string;
  isShow: boolean;
  order: number;
  _id?: string;
}

export interface FareServiceDescriptionItem {
  main_description: string;
  add_info: string;
  order: number;
  isShow: boolean;
  _id?: string;
}

export interface FareCalculator {
  title: string;
  currency: string;
  price: number;
  description: string;
  hoursDuration: number;
  calculatorServices: ICalculatorService[];
}

export interface ICalculatorService {
  title: string;
  additionInfo: string;
  price: number;
  priceStep: number;
  selectedByDefault: boolean;
  isSingleService: boolean;
  affectToTime: boolean;
  isFroze: boolean;
  timeStep: number;
  isShow: boolean;
  order: number;
  count?: number;
  countStep?: number;
  _id?: string;
}
