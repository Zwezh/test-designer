import { ChangeDetectionStrategy,  Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { QuestionsTableColumnsConstants } from '../../shared';

export interface Question {
  category: string;
  weight: number;
  description: string;
}

const ELEMENT_DATA: Question[] = [
  {
    category: 'Одиночный выбор',
    weight: 10,
    description: 'Описание вопроса'
  },
  {
    category: 'Одиночный выбор1',
    weight: 10,
    description: 'Описание вопроса1'
  },
  {
    category: 'Одиночный выбор 2',
    weight: 10,
    description: 'Описание вопроса 2'
  },
  {
    category: 'Одиночный выбор 3',
    weight: 10,
    description: 'Описание вопроса 3 '
  }
];

@Component({
  selector: 'td-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionsListComponent {
  dataSource: MatTableDataSource<Question>;

  get displayedColumns(): string[] {
    return QuestionsTableColumnsConstants;
  }

  constructor() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  onFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
