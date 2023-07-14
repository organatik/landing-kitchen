import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectCube,
} from 'swiper';
import { CommentInterface } from '../card-food/interfaces/comment-interface';
import { SwiperComponent } from 'swiper/angular';


SwiperCore.use([Navigation, Pagination, Autoplay, EffectCube]);
@Component({
  selector: 'app-comments-slider',
  templateUrl: './comments-slider.component.html',
  styleUrls: ['./comments-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CommentsSliderComponent implements OnInit {
  countSlider = 0;
  lengthArray: number = 0;
  @Input() content: CommentInterface[] | undefined;

  @ViewChild('swiperComment') swiperComment!: SwiperComponent;
  ngOnInit(): void {
    this.lengthArray = this.content?.length ?? 0;
    this.lengthArray /= 2;
  }

  ngAfterContentChecked(): void {
    if (this.swiperComment) {
      this.swiperComment.swiperRef.autoplay?.start();
    }
  }
  onSwiperSlideChange(): void {
    this.countSlider = this.swiperComment.swiperRef.realIndex;
  }

  onPrevClick(): void {
    this.swiperComment.swiperRef.slidePrev();
  }

  onNextClick(): void {
    this.swiperComment.swiperRef.slideNext();
  }
}
