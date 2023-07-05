import { Component } from '@angular/core';
import {CardFoodInterface} from "../../shared/card-food/interfaces/card-food-interface";

@Component({
  selector: 'app-menu-block',
  templateUrl: './menu-block.component.html',
  styleUrls: ['./menu-block.component.scss']
})
export class MenuBlockComponent {
   public menu: CardFoodInterface [] = [
    {
    img: '../../../assets/images/menu1.svg',
    title: 'Сніданок',
    firstDescription: '7 сніданків',
    description: 'з переліком та кількістю інгрідієнтів, описом і прорахуванням часу, а також посилання на відео-рецепт кожного сніданку.',
      price: 99
    },
    {
      img: '../../../assets/images/menu2.svg',
      title: 'Обід',
       firstDescription: '7 обідів',
      description: 'з переліком та кількістю інгрідієнтів, описом і прорахуванням часу, а також посилання на відео-рецепт кожного обіду.',
      price: 99
    },
    {
      img: '../../../assets/images/menu3.svg',
      title: 'Вечеря',
      firstDescription: '7 вечерь',
      description: 'з переліком та кількістю інгрідієнтів, описом і прорахуванням часу, а також посилання на відео-рецепт кожної вечері.',
      price: 99
    }
  ];




}