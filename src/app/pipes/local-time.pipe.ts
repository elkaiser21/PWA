import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localTime'
})
export class LocalTimePipe implements PipeTransform {

  transform(isoTime: string, localOffset: number): number {
    let hours = Number(isoTime.substr(11, 2));
    const min = Number(isoTime.substr(14, 2));
    const sec = Number(isoTime.substr(17, 2));
    const offsetHours = localOffset / -60 ;
    hours += offsetHours;
    return hours * 3600 + min * 60 + sec;
  }

}
