import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pangkat'})
export class PangkatPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    // cek apakah pangkat merupakan angka
    let exp = parseFloat(exponent);
    // jika exp bukan angka maka akan dipangkatkan 1. jika angka maka akan dipangkatkan dengan exp
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}