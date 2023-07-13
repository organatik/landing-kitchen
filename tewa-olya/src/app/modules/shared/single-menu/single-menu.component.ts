import { Component, Input } from '@angular/core';
import { SingleMenuInterface } from '../card-food/interfaces/single-menu-interface';
import { PopupService } from '../../popup.service';

@Component({
  selector: 'app-single-menu',
  templateUrl: './single-menu.component.html',
  styleUrls: ['./single-menu.component.scss'],
})
export class SingleMenuComponent {
  @Input() singleMenu: SingleMenuInterface | undefined;
  @Input() isRevers: boolean = false;
  constructor(private popupService: PopupService) {}

  openPopup() {
    this.popupService.openPopup();
  }
}
