import { Injectable } from '@angular/core';

@Injectable()
export class Helpers {
  public static numberFormatter(number: number): any {
      return number > 999 ? (number / 1000).toFixed(1) + 'k' : number;
  }
}
