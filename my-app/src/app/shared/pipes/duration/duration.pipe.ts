import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(mins:number): string {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return (hours > 0 ? hours + 'час(а) ' : '') + minutes + 'минут';
  }

}
