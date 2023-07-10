import {Component, Input, OnInit} from '@angular/core';

interface carouselImage{
  imageSrc: string
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{

  @Input() images: carouselImage[] = [];
  @Input() idnicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;


  selectedIndex = 0

  ngOnInit(): void {

  }
  // set index of img
  selectImage(index: number): void{
    this.selectedIndex = index
  }

  onPrevClick():void{
    if(this.selectedIndex === 0){
      return;
    } else {
      this.selectedIndex--;
    }
  }
  onNextClick():void {
    if (this.selectedIndex === this.images.length - 1) {
      return;
    } else {
      this.selectedIndex++;
    }
  }

}
