import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModelModule } from './model';
import { RestModule } from './rest';

@NgModule({
  imports: [
    CommonModule,
    ModelModule,
    RestModule
  ]
})
export class CoreModule {
}
