import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field/input-field.component';

@NgModule({
  declarations: [
    InputFieldComponent
  ],
  exports: [
    InputFieldComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
