import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'encode'})
export class UrlEncodePipe implements PipeTransform {
  transform(path: string) {
    return encodeURIComponent(path);
  }
}
