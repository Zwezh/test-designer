import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Quiz } from '@appApi';

import { TestsTableColumnsConstants } from '../../shared/constants';

@Component({
  selector: 'td-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.scss']
})
export class TestsListComponent {
  public dataSource: MatTableDataSource<Quiz>;

  @Input() set collection(value: Quiz[]) {
    this.dataSource.data = value && [...value];
  }

  public get displayedColumns(): string[] {
    return TestsTableColumnsConstants;
  }

  constructor() {
    this.dataSource = new MatTableDataSource();
  }

  public onFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
