import { Component } from '@angular/core';
import { WhyWeCardInterface } from '../../shared/why-we-card/interface/why-we-card.interface';

@Component({
  selector: 'app-why-we',
  templateUrl: './why-we.component.html',
  styleUrls: ['./why-we.component.scss'],
})
export class WhyWeComponent {
  public whyWeBlock: WhyWeCardInterface[] = [
    {
      img: [
        './assets/images/facebook-1.svg',
        './assets/images/facebook-2.svg',
        './assets/images/facebook-1.svg',
        './assets/images/facebook-2.svg',
      ],
      title: 'Facebook',
      description: [
        'Більше 11 000 годин переглядів;',
        'На каналі 10 000+ підписників;',
      ],
      active: {
        numberOfActive: 10000,
        titleActive: 'Підписників',
      },
    },
    {
      img: [
        '/assets/images/youtube-1.svg',
        '/assets/images/youtube-2.svg',
        '/assets/images/youtube-1.svg',
        '/assets/images/youtube-2.svg',
      ],
      title: 'Youtube',
      description: [
        'Більше 200 000+ переглядів',
        'На каналі 3000+ підписників;',
      ],
      active: {
        numberOfActive: 200000,
        titleActive: 'Переглядів',
      },
    },
    {
      img: [
        '/assets/images/telegram-2.svg',
        '/assets/images/telegram-1.svg',
        '/assets/images/telegram-2.svg',
        '/assets/images/telegram-1.svg',
      ],
      title: 'Telegram',
      description: ['Бот для замовлення;', 'Більше 100+ замовників;'],
      active: {
        numberOfActive: 100,
        titleActive: 'Замовників',
      },
    },
  ];
}
