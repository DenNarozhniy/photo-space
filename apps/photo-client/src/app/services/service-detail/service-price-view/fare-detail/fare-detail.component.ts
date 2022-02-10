import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { FareItemViewModel, ServiceOrder, ICalculatorService } from '@photo-space/models';

@Component({
  selector: 'app-fare-detail',
  templateUrl: './fare-detail.component.html',
  styleUrls: ['./fare-detail.component.scss']
})
export class FareDetailComponent implements OnInit, OnChanges {

  @Input() fareData: FareItemViewModel;
  public currentModel: ServiceOrder;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.fareData)
    if (changes.fareData) {
        this.prepareResultModel();
    }
  }

  prepareResultModel() {
    this.currentModel = {
      title: this.fareData.title,
      initialPrice: this.fareData.price,
      initialHours: this.fareData.hours,
      fareServices: this.fareData.fareServices.filter(item => item.isSelected),
      calculatorServices: this.fareData.calculatorServices.filter(item => item.selectedByDefault),
    }
  }

  toggleCalculatorService(event, service) {
    let item = {...service} as ICalculatorService;
    item.count = event.count;
    if(event.isCheck){
       this.currentModel.calculatorServices.push(item);
    } else {
      this.currentModel.calculatorServices = this.currentModel.calculatorServices
      .filter(item => item._id !== service._id);
    }
    this.currentModel = {...this.currentModel}
    console.log(this.currentModel)
  }

  onChangeServiceCount(count, service) {
  
    const serv = {...service};
    serv.count = count;

    const idx = this.currentModel.calculatorServices.findIndex(item => item._id === service._id);

    if (~idx) {
      this.currentModel.calculatorServices[idx] = serv;
    }

    this.currentModel = {...this.currentModel}
    console.log(this.currentModel)
  }

  simpleServiceChange(event, service) {
    if(event.isCheck){
      this.currentModel.fareServices.push(service);
   } else {
     this.currentModel.fareServices = this.currentModel.fareServices.filter(item => item.serviceName !== service.serviceName);
   }
   this.currentModel = {...this.currentModel}
   console.log(this.currentModel)
  }

}


