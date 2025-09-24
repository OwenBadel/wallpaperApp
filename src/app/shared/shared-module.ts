import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

// Components
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { ToggleTComponent } from './components/toggle-t/toggle-t.component';
import { CardComponent } from './components/card-item/card-item.component';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { LinkComponent } from './components/link/link.component';

// Providers
import { User } from './services/user/user';
import { ActionSheet } from './providers/actionSheet/actionSheet';

const modules = [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, RouterModule, TranslateModule];
const components = [InputComponent, ButtonComponent, ToggleTComponent, CardComponent, FloatingButtonComponent, LinkComponent];
const providers = [User, ActionSheet];

@NgModule({
  declarations: [...components],
  providers: [...providers],
  imports: [...modules],
  exports: [...modules, ...components]
})
export class SharedModule {}
