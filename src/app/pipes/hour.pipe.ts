import { Pipe, PipeTransform } from '@angular/core';
import Utils from '../util/Utils';

@Pipe({
  name: 'hour'
})
export class HourPipe implements PipeTransform {

  transform(totalSeconds: number): string {
    const hours: string = Utils.padLeft('' + Math.floor(totalSeconds / 3600), '0', 2);
    const restSeconds = totalSeconds % 3600;
    const minutes: string = Utils.padLeft('' + Math.floor(restSeconds / 60), '0', 2);
    const seconds: string = Utils.padLeft('' + restSeconds % 60, '0', 2);

    return hours + ':' + minutes + ':' + seconds;
  }
}
