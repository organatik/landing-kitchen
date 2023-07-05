import { Component } from '@angular/core';
import {CommentInterface} from "../../shared/card-food/interfaces/comment-interface";

@Component({
  selector: 'app-comment-block',
  templateUrl: './comment-block.component.html',
  styleUrls: ['./comment-block.component.scss']
})
export class CommentBlockComponent {
    public content: CommentInterface [] = [
      {
      img: 'assets/images/comments1.svg',
      title: 'Шевчук Назар',
      description: 'Найращі рецепти, дуже просто та смачно, дякую. Рекомендую брати все меню, бо краще всі разом взяти та заощадити кошти',
      },
      {
        img: 'assets/images/comment2.svg',
        title: 'Соловський Сергій',
        description: 'Відповідають оперативно, зразу після оплати скидають рецепти, заощадив час та кошти.',
      }
    ];
}
