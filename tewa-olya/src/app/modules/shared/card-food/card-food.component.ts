import { Component, Input } from '@angular/core';
import { CardFoodInterface } from './interfaces/card-food-interface';

@Component({
  selector: 'app-card-food',
  templateUrl: './card-food.component.html',
  styleUrls: ['./card-food.component.scss'],
})
export class CardFoodComponent {
  @Input() cardData: CardFoodInterface | undefined;
}
