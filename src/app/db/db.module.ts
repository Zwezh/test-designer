import { NgModule } from '@angular/core';
import { NgxIndexedDBModule } from 'ngx-indexed-db';

import { DbApiConfigModel } from './models/db-config.model';

@NgModule({
  imports: [
    NgxIndexedDBModule.forRoot(new DbApiConfigModel().DB_CONFIG)
  ],
  declarations: []
})
export class DbModule { }
