import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardFoodComponent } from './card-food/card-food.component';
import { CommentsComponent } from './comments/comments.component';
import { SingleMenuComponent } from './single-menu/single-menu.component';
import { MainButtonComponent } from './main-button/main-button.component';
import {MatButtonModule} from '@angular/material/button';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import {CdkStepperModule} from "@angular/cdk/stepper";




@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        CardFoodComponent,
        CommentsComponent,
        SingleMenuComponent,
        MainButtonComponent,
        ImgSliderComponent
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardFoodComponent,
    CommentsComponent,
    SingleMenuComponent,
    MainButtonComponent,
    ImgSliderComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    CdkStepperModule,
  ]
})
export class SharedComponentsModule { }
