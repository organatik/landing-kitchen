import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormForTelegramComponent } from './form-for-telegram/form-for-telegram.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardFoodComponent } from './card-food/card-food.component';
import { ButtonComponent } from './button/button.component';
import { CommentsComponent } from './comments/comments.component';
import { SingleMenuComponent } from './single-menu/single-menu.component';



@NgModule({
    declarations: [
        FormForTelegramComponent,
        HeaderComponent,
        FooterComponent,
        CardFoodComponent,
        ButtonComponent,
        CommentsComponent,
        SingleMenuComponent
    ],
  exports: [
    FormForTelegramComponent,
    HeaderComponent,
    FooterComponent,
    CardFoodComponent,
    CommentsComponent,
    SingleMenuComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule
  ]
})
export class SharedComponentsModule { }
