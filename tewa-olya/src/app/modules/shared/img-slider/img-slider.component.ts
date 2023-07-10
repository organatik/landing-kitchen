import {Component, Input} from '@angular/core';
import {CdkStepper} from "@angular/cdk/stepper";

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss'],
  providers:[{provide: CdkStepper, useExisting: ImgSliderComponent}]
})
export class ImgSliderComponent extends CdkStepper{

  override get selected(): any {
    return super.selected;
  }

  override set selected(value: any) {
    super.selected = value;
  }

}
