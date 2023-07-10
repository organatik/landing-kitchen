import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardFoodComponent } from './card-food/card-food.component';
import { CommentsComponent } from './comments/comments.component';
import { SingleMenuComponent } from './single-menu/single-menu.component';
import { MainButtonComponent } from './main-button/main-button.component';
import {MatButtonModule} from '@angular/material/button';
import { CarouselComponent } from './carousel/carousel.component';




@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        CardFoodComponent,
        CommentsComponent,
        SingleMenuComponent,
        MainButtonComponent,
        CarouselComponent
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardFoodComponent,
    CommentsComponent,
    SingleMenuComponent,
    MainButtonComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class SharedComponentsModule { }
