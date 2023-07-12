import {Component, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AfterPopupWindowComponent} from "../after-popup-window/after-popup-window.component";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopupComponent {

  constructor(
    private ref:MatDialogRef<PopupComponent>,
    private afterPopupDialog:MatDialog
  ) {

  }
  toppingList: string[] = ['Сніданок', 'Обід', 'Вечеря', 'Комбо: Всі три меню',];
  closePopup(){
      this.ref.close()
  }
  afterSubmitPopup(){
    this.afterPopupDialog.open(AfterPopupWindowComponent, {
      enterAnimationDuration: '1000ms'
    })
  }

}
