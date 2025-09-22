import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../shared/components/input/input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../shared/components/button/button.component';
import { ToggleTComponent } from './components/toggle-t/toggle-t.component';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { CardComponent } from './components/card-item/card-item.component';
import { LinkComponent } from './components/link-item/link-item.component';

@NgModule({
  declarations: [
      InputComponent,
      ButtonComponent,
      ToggleTComponent,
      FloatingButtonComponent,
      CardComponent,
      LinkComponent
      

  ] ,
providers:[],

  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,


  ],

  exports:[InputComponent, ButtonComponent, ToggleTComponent, FloatingButtonComponent, CardComponent, LinkComponent]

})
export class SharedModule { }
