import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterDirectoriesOrPhotosOnly'})
export class FilterDirectoriesOrPhotosOnlyPipe implements PipeTransform {
  transform(data: any[], directories = true) {
    return data.filter(item => directories ? (item && item.children) : (item && !item.children));
  }
}
