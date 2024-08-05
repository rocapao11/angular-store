import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value);
    const today = new Date();
    return formatDistance(today, date);

    // const date = new Date(value).getTime();
    // if (!value) return 'no hay fecha de actualización';
    // const now = Date.now();
    // const seconds = Math.floor((now - date) / 1000);
    // const minute = Math.floor(seconds/60);
    // const hour = Math.floor(minute/60);
    // const day = Math.floor(hour/24);
    // const week = Math.floor(day/7);
    // const month = Math.floor(week/31);
    // const year = Math.floor(month/12);

    // if (seconds < 60) return 'Hace unos segundos';
    // if (minute < 60) return `Hace ${minute} minutos`;
    // if (hour < 24) return `Hace ${hour} horas`;
    // if (day < 7) return `Hace ${day} dias`;
    // if (week < 4) return `Hace ${week} semanas`;
    // if (month < 12) return `Hace ${month} meses`;
    // if (month > 24) return `Hace ${year} años`;
    // return `${seconds} seconds`
  }
}
