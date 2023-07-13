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
        img: 'assets/images/comment7.svg',
        title: 'Соловський Сергій',
        description: 'Відповідають оперативно, зразу після оплати скинули рецепти, заощадила час та кошти.',
      },
      {
        img: 'assets/images/comment4.svg',
        title: 'Кичко Ніна',
        description: 'Смачнота цих страв перевищує всі мої очікування, шедевр дякую.',
      },
      {
        img: 'assets/images/comment6.svg',
        title: 'Сілінченко Марина',
        description: 'Якщо б могла їсти цю страву кожен день, я була б найщасливішою людиною на світі!',
      },
      {
        img: 'assets/images/comment5.svg',
        title: 'Олецький Павло',
        description: 'Найращі рецепти, дуже просто та смачно, дякую. Рекомендую брати все меню, бо краще всі разом взяти та заощадити кошти',
      },
      {
        img: 'assets/images/comment3.svg',
        title: 'Гурська Аліна',
        description: 'Спробувавши ці страви, я буквально закохався в її смак - це просто диво кулінарії!.',
      }
    ];
}
