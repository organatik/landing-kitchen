import {Component} from '@angular/core';
import {SingleMenuInterface} from "../../shared/card-food/interfaces/single-menu-interface";


@Component({
  selector: 'app-single-menu-block',
  templateUrl: './single-menu-block.component.html',
  styleUrls: ['./single-menu-block.component.scss'],

})


export class SingleMenuBlockComponent{

    public singleMenu: SingleMenuInterface [] = [

      {
        title: 'Cніданок',
        firstText: ' Ви отримаєте інструкцію',
        greenText: '7 сніданків',
        description: 'з переліком та кількістю інгрідієнтів, описом і прорахуванням часу, а також посилання на відео-рецепт кожного сніданку.',
        price: 99,
        currency: '₴',
        images: ['assets/images/1.jpeg','assets/images/2.jpeg','assets/images/3.jpeg']
      },
      {
        title: 'Обід',
        firstText: ' Ви отримаєте інструкцію',
        greenText: '7 oбідів',
        description: 'з переліком та кількістю інгрідієнтів, описом і прорахуванням часу, а також посилання на відео-рецепт кожного обіду.',
        price: 99,
        currency: '₴',
        images: ['assets/images/3.jpeg','assets/images/2.jpeg','assets/images/1.jpeg']
      },
      {
        title: 'Вечеря',
        firstText: ' Ви отримаєте інструкцію',
        greenText: '7 вечерь',
        description: 'з переліком та кількістю інгрідієнтів, описом і прорахуванням часу, а також посилання на відео-рецепт кожного вечері.',
        price: 99,
        currency: '₴',
        images: ['assets/images/2.jpeg','assets/images/1.jpeg','assets/images/3.jpeg']
      }
    ]
}
