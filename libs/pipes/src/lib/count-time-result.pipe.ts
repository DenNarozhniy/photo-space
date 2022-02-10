import { PipeTransform, Pipe } from '@angular/core';
import { ServiceOrder } from "@photo-space/models";

@Pipe({name: 'countTimeDetail'})
export class CountTimeDetail implements PipeTransform {

  transform(data: ServiceOrder) {
    let result = data.initialHours || 0;

    data.calculatorServices.map(item => {
        if (item.affectToTime && item.count > 1) {
            const counter = item.count - 1;
            result += item.timeStep * counter;
        }
    })
    return result;
  }
}