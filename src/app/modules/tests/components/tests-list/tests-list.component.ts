import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { TestsTableColumnsConstants } from '../../shared/constants';


export interface Test {
  // id: number;
  name: string;
  discipline: string;
  modifiedDate: Date;
}

const ELEMENT_DATA: Test[] = [
  {
    name: 'Высшая математика №1',
    discipline: 'Высшая математика',
    modifiedDate: new Date()
  },
  {
    name: 'Высшая математика №2',
    discipline: 'Высшая математика',
    modifiedDate: new Date()
  },
  {
    name: 'Высшая математика №3',
    discipline: 'Высшая математика',
    modifiedDate: new Date()
  },
  {
    name: 'Высшая математика №4',
    discipline: 'Высшая математика',
    modifiedDate: new Date()
  },
  {
    name: 'Высшая математика №3.1',
    discipline: 'Высшая математика',
    modifiedDate: new Date()
  },
  {
    name: 'Высшая математика №3.2',
    discipline: 'Высшая математика',
    modifiedDate: new Date()
  },
  {
    name: 'Высшая математика №5',
    discipline: 'Высшая математика',
    modifiedDate: new Date()
  },
  {
    name: 'Высшая математика №7',
    discipline: 'Высшая математика',
    modifiedDate: new Date()
  },
  {
    name: 'Высшая математика №8',
    discipline: 'Высшая математика',
    modifiedDate: new Date()
  },
  {
    name: 'Высшая математика № 9',
    discipline: 'Высшая математика',
    modifiedDate: new Date()
  }
];
@Component({
  selector: 'td-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.scss']
})
export class TestsListComponent {
  public dataSource: MatTableDataSource<Test>;

  public get displayedColumns(): string[] {
    return TestsTableColumnsConstants;
  }

  constructor() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  public onFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
