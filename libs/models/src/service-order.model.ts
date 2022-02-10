import { FareSingleService } from './fare-item-view.model';
import { ICalculatorService } from './photo-service.model';

export class ServiceOrder {
      title: string;
      initialPrice: number;
      initialHours: number;
      fareServices: FareSingleService[];
      calculatorServices: ICalculatorService[];
}