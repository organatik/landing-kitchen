import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormForTelegramComponent } from './form-for-telegram/form-for-telegram.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
    declarations: [
        FormForTelegramComponent,
        HeaderComponent,
        FooterComponent
    ],
  exports: [
    FormForTelegramComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule
  ]
})
export class SharedComponentsModule { }
