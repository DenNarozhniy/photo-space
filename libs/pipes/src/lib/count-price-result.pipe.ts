import { Pipe, PipeTransform } from '@angular/core';
import { ServiceOrder } from "@photo-space/models";

@Pipe({name: 'countPriceDetail'})
export class CountPriceDetail implements PipeTransform {

  transform(data: ServiceOrder) {
    let result = data.initialPrice || 0;

    data.calculatorServices.map(item => {
        result += item.price;

        if (item.count > 1) {
            const counter = item.count - 1;
            result += item.priceStep * counter;
        }

    })

    data.fareServices.map(item => {
        result += item.price
    })

    return result;
  }
}