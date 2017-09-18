import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormatter'
})
export class NumberFormatter implements PipeTransform {
  transform(number: number): any {
    return number > 999 ? ( number / 1000 ).toFixed(1) + 'k' : number;
  }
}
