import {
  animate,
  group,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { getCurrentTeacherAction } from './store/features';

const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      style({ position: 'fixed', width: '100%', height: '100%' }),
      { optional: true }
    ),
    group([
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('0.5s ease-in-out', style({ opacity: 1 }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('0.5s ease-in-out', style({ opacity: 0 }))
        ],
        { optional: true }
      )
    ])
  ])
]);
@Component({
  selector: 'td-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routerTransition]
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  getState(outlet: any): any {
    return outlet.activated && outlet.activatedRoute.component.name;
  }

  ngOnInit(): void {
    this.store.dispatch(getCurrentTeacherAction());
  }
}
