import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], fieldName: string, fieldValue: any): any[] {
    if (!fieldValue) return list;
    return list.filter((element) => element[fieldName].toUpperCase() === fieldValue.toUpperCase());
  }

}
