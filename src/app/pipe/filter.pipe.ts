import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any, input: string): any {
    if (input) {
      return array.filter((val:any) => val?.name?.toLowerCase().includes(input.toLowerCase()));
    } else {
      return array;
    }
  }

}
