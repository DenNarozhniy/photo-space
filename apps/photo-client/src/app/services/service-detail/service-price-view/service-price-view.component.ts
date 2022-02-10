import {Component, Input, OnInit} from '@angular/core';
import {FareCalculator, FareServiceItem} from "@photo-space/models";
import {
  FareDescriptionInfo,
  FareItemViewModel,
  FareSingleService
} from "@photo-space/models";
import { SERVICE_KEYS } from "@photo-space/constants";

@Component({
  selector: 'app-service-price-view',
  templateUrl: './service-price-view.component.html',
  styleUrls: ['./service-price-view.component.scss']
})
export class ServicePriceViewComponent implements OnInit {

  @Input() fares: FareServiceItem[];
  @Input() fareCalculatorItem: FareCalculator;
  @Input() faresTitle = '';
  public selectedFareId = '';
  public constants = SERVICE_KEYS;

  public selectedFare: FareItemViewModel;

  constructor() { }

  ngOnInit() {
    if(this.fares[0]) {
      this.onChangeSelect(this.fares[0]._id);
    }
  }

  public onChangeSelect(event: string) {
    this.selectedFareId = event;
    if(this.selectedFareId !== this.constants.CALCULATOR) {
 
      const fare = this.fares.find(item => item._id === this.selectedFareId);
      if (fare) {
        this.onSelectFare(fare);
      }

    } else {
      this.onSelectCalculator();
    }
  }

  public onSelectFare(fare: FareServiceItem) {
    this.selectedFare = new FareItemViewModel(
      fare.main_title,
      fare.price,
      false,
      fare.currency,
      fare.hoursDuration,
      '',
      fare.addServices.map(item => new FareSingleService(
        item.selectedByDefault,
        item.price,
        item.title,
        item.description,
        item.isFroze
        )),
      fare.fareDescriptions,
      fare.add_info,
      [],
    );
  }

  public onSelectCalculator() {
    this.selectedFare = new FareItemViewModel(
      this.fareCalculatorItem.title,
      this.fareCalculatorItem.price,
      true,
      this.fareCalculatorItem.currency,
      this.fareCalculatorItem.hoursDuration,
      this.fareCalculatorItem.description,
      this.fareCalculatorItem.calculatorServices
        .filter(item => item.isSingleService)
        .map(item => new FareSingleService(
          item.selectedByDefault,
          item.price,
          item.title,
          item.additionInfo,
          item.isFroze
        )),
      [],
      [],
      this.fareCalculatorItem.calculatorServices
        .filter(item => !item.isSingleService),
    );
  }
}
