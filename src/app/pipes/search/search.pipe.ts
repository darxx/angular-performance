import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, keys: string, term: string): any {
    if (!term) {
      return value;
    }
    term = term.replace(/\\/g, '\\\\');

    return (value || []).filter((item: any) => keys.split(',')
      .some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi')
        .test(item[key])));
  }
}
