import { LocaleData } from 'ngx-bootstrap';

export const roLocale: LocaleData = {
  abbr: 'en-gb',
  months: 'Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie'.split('_'),
  monthsShort: 'Ian_Feb_Mar_Apr_Mai_Iun_Iul_Aug_Sept_Oct_Nov_Dec'.split('_'),
  weekdays: 'Duminică_Luni_Marți_Miercuri_Joi_Vineri_Sâmbătă'.split('_'),
  weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
  weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
  longDateFormat : {
    LT : 'HH:mm',
    LTS : 'HH:mm:ss',
    L : 'DD/MM/YYYY',
    LL : 'D MMMM YYYY',
    LLL : 'D MMMM YYYY HH:mm',
    LLLL : 'dddd, D MMMM YYYY HH:mm'
  },
  calendar : {
    sameDay : '[Astăzi la] LT',
    nextDay : '[Mâine la] LT',
    nextWeek : 'dddd [la] LT',
    lastDay : '[Ieri la] LT',
    lastWeek : '[Ultima] dddd [la] LT',
    sameElse : 'L'
  },
  relativeTime : {
    future : 'in %s',
    past : '%s în urmă',
    s : 'câteva secunde',
    ss : '%d secunde',
    m : 'un minut',
    mm : '%d minute',
    h : 'o oră',
    hh : '%d ore',
    d : 'o zi',
    dd : '%d zile',
    M : 'o lună',
    MM : '%d luni',
    y : 'un an',
    yy : '%d ani'
  },
  dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
  ordinal(_num: number): string {
    const num = Number(_num);
    const b = num % 10,
      output = (~~(num % 100 / 10) === 1) ? 'th' :
        (b === 1) ? 'st' :
          (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    return num + output;
  },
  week : {
    dow : 1, // Monday is the first day of the week.
    doy : 4  // The week that contains Jan 4th is the first week of the year.
  }
};
