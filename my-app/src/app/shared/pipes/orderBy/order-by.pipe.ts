import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(list: any[], field: string): any[] {
    return list.sort((a, b) => (typeof a[field] == 'object' ? a[field].getTime() : a[field]) < (typeof b[field] == 'object' ? b[field].getTime() : b[field]) ? 1 : -1);
  }

}
