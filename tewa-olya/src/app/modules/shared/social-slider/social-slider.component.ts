import {Component, OnInit, ViewEncapsulation,} from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFlip,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { WhyWeCardInterface } from "../why-we-card/interface/why-we-card.interface";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFlip]);

@Component({
  selector: 'app-social-slider',
  templateUrl: './social-slider.component.html',
  styleUrls: ['./social-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SocialSliderComponent implements OnInit {
  ngOnInit(): void {
  }

}
