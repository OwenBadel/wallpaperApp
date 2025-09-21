import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../shared/components/input/input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../shared/components/button/button.component';
import { ToggleTComponent } from './components/toggle-t/toggle-t.component';



@NgModule({
  declarations: [
      InputComponent,
      ButtonComponent,
      ToggleTComponent

  ] ,
providers:[],

  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,


  ],

  exports:[InputComponent, ButtonComponent, ToggleTComponent]

})
export class SharedModule { }
