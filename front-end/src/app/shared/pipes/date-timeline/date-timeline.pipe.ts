import { Pipe, PipeTransform } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'dateTimeline',
})
export class DateTimelinePipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): Observable<string> {
    return timer(0, 10000).pipe(
      map(() => {
        const input_date = new Date(value);
        const now = new Date();

        const diff = Math.floor(((now as any) - (input_date as any)) / 1000);

        if (diff <= 1 || diff < 60) {
          return `${diff} segundos`;
        }

        if (diff <= 60 || diff < 5400) {
          return `${Math.round(diff / 60)} minutos`;
        }

        if (diff <= 5400 || diff < 86400) {
          return `${Math.round(diff / 3600)} horas`;
        }

        if (diff <= 129600 || diff < 604800) {
          return `${Math.round(diff / 86400)} dias`;
        }

        if (diff <= 777600) {
          return 'meses';
        }

        return input_date.toISOString();
      })
    );
  }
}
