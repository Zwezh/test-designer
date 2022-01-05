import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

const COMMON_MODULES = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
];

@NgModule({
    imports: [COMMON_MODULES],
    exports: [COMMON_MODULES]
})
export class SharedModule { }
