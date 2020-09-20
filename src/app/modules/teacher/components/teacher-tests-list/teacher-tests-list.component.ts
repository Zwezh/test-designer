import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  // id: number;
  name: string;
  discipline: string;
  modifiedDate: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Высшая математика №1', discipline: 'Высшая математика', modifiedDate: new Date() },
  { name: 'Высшая математика №2', discipline: 'Высшая математика', modifiedDate: new Date() },
  { name: 'Высшая математика №3', discipline: 'Высшая математика', modifiedDate: new Date() },
  { name: 'Высшая математика №4', discipline: 'Высшая математика', modifiedDate: new Date() },
  { name: 'Высшая математика №3.1', discipline: 'Высшая математика', modifiedDate: new Date() },
  { name: 'Высшая математика №3.2', discipline: 'Высшая математика', modifiedDate: new Date() },
  { name: 'Высшая математика №5', discipline: 'Высшая математика', modifiedDate: new Date() },
  { name: 'Высшая математика №7', discipline: 'Высшая математика', modifiedDate: new Date() },
  { name: 'Высшая математика №8', discipline: 'Высшая математика', modifiedDate: new Date() },
  { name: 'Высшая математика № 9', discipline: 'Высшая математика', modifiedDate: new Date() },
];
@Component({
  selector: 'td-teacher-tests-list',
  templateUrl: './teacher-tests-list.component.html',
  styleUrls: ['./teacher-tests-list.component.scss']
})
export class TeacherTestsListComponent {

  constructor() { }

  displayedColumns: Array<string> = ['name', 'discipline', 'modifiedDate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
