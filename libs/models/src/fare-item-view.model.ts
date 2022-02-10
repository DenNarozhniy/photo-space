import {FareServiceDescriptionItem, ICalculatorService} from "./photo-service.model";

export class FareItemViewModel {
  title: string;
  price: number;
  isCalculator: boolean;
  currency: string;
  hours: number;
  descriptionText: string;
  fareServices: FareSingleService[];
  fareDescriptionItems: FareServiceDescriptionItem[];
  fareDescriptionInfo: FareDescriptionInfo[];
  calculatorServices: ICalculatorService[];
  constructor(
    title = '',
    price = 0,
    isCalculator = false,
    currency = '',
    hours = 0,
    descriptionText = '',
    fareServices = [],
    fareDescriptionItems = [],
    fareDescriptionInfo = [],
    calculatorServices = []
  ) {
    this.title = title;
    this.price = price;
    this.isCalculator = isCalculator;
    this.currency = currency;
    this.hours = hours;
    this.descriptionText = descriptionText;
    this.fareServices = fareServices;
    this.fareDescriptionItems = fareDescriptionItems;
    this.fareDescriptionInfo = fareDescriptionInfo;
    this.calculatorServices = calculatorServices;
  }
}

export class FareDescriptionInfo {
  isShow: boolean;
  order: number;
  text: string;
  title: string;
  constructor(
    isShow = true,
    order = 0,
    text = '',
    title = '',
  ) {
    this.title = title;
    this.text = text;
    this.isShow = isShow;
    this.order = order;
  }
}

export class FareSingleService {
  isSelected: boolean;
  price: number;
  serviceName: string;
  addInfo: string;
  isFroze: boolean;
  constructor(
    isSelected = false,
    price = 0,
    serviceName = '',
    addInfo = '',
    isFroze = false,
    ) {
    this.isSelected = isSelected;
    this.price = price;
    this.serviceName = serviceName;
    this.addInfo = addInfo;
    this.isFroze = isFroze;
  }
}
