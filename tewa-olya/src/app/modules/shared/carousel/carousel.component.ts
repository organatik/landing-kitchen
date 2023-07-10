import {Component, Input} from '@angular/core';

interface carouselImage{
  imageSrc: string
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @Input() images: carouselImage[] = []
  selectedIndex = 0

}
