import { Component } from '@angular/core';
import {SingleMenuInterface} from "../../shared/card-food/interfaces/single-menu-interface";

@Component({
  selector: 'app-single-menu-block',
  templateUrl: './single-menu-block.component.html',
  styleUrls: ['./single-menu-block.component.scss']
})
export class SingleMenuBlockComponent {
    public singleMenu: SingleMenuInterface [] = [
      {
        title: 'Cніданок',
        firstText: ' Ви отримаєте інструкцію',
        greenText: '7 сніданків',
        description: 'з переліком та кількістю інгрідієнтів, описом і прорахуванням часу, а також посилання на відео-рецепт кожного сніданку.',
        price: 99,
        currency: '₴',
        image: '../../../../assets/images/1.svg'
      },
      {
        title: 'Обід',
        firstText: ' Ви отримаєте інструкцію',
        greenText: '7 oбідів',
        description: 'з переліком та кількістю інгрідієнтів, описом і прорахуванням часу, а також посилання на відео-рецепт кожного обіду.',
        price: 99,
        currency: '₴',
        image: '../../../../assets/images/2.svg'
      },
      {
        title: 'Вечеря',
        firstText: ' Ви отримаєте інструкцію',
        greenText: '7 вечерь',
        description: 'з переліком та кількістю інгрідієнтів, описом і прорахуванням часу, а також посилання на відео-рецепт кожного вечері.',
        price: 99,
        currency: '₴',
        image: '../../../../assets/images/3.svg'
      },
    ]
}
