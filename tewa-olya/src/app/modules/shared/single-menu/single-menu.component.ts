import {Component, Input} from '@angular/core';
import {SingleMenuInterface} from "../card-food/interfaces/single-menu-interface";


@Component({
  selector: 'app-single-menu',
  templateUrl: './single-menu.component.html',
  styleUrls: ['./single-menu.component.scss']
})
export class SingleMenuComponent {

  @Input() singleMenu: SingleMenuInterface | undefined;
  @Input() isRevers: boolean = false;



}
