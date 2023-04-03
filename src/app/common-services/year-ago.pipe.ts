import { Pipe, PipeTransform } from '@angular/core';
import { data } from 'jquery';

@Pipe({
  name: 'yearAgo',
})
export class YearAgoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      if (value == 12) {
        return '1 year';
      } else {
        let years = value / 12;
        return years.toFixed(1) + ' years';
      }
    }
    return value;
  }
}
