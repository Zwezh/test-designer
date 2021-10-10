import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe<T> implements PipeTransform {

  transform(list: T[], search: string, field?: string): T[] {
    if (!list) return [];
    if (!search) return list;
    search = search.toLowerCase();

    return list.filter((item: T) => {
      return field ?
        item[field].toLowerCase().includes(search) :
        JSON.stringify(item).toLowerCase().includes(search);
    });
  }
}