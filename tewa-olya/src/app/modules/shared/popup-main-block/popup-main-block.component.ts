import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AfterPopupWindowComponent} from "../after-popup-window/after-popup-window.component";

@Component({
  selector: 'app-popup-main-block',
  templateUrl: './popup-main-block.component.html',
  styleUrls: ['./popup-main-block.component.scss']
})


export class PopupMainBlockComponent {
  constructor(
    public dialogRef: MatDialogRef<PopupMainBlockComponent>,
    private afterPopupDialog:MatDialog
  ) {
  }
  afterSubmitPopup(){
    this.afterPopupDialog.open(AfterPopupWindowComponent, {
      enterAnimationDuration: '1000ms'
    })
  }
  closeDialog(){
    this.dialogRef.close();
  }

}
