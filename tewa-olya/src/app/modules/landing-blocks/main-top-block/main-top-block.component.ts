import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopupMainBlockComponent } from '../../shared/popup-main-block/popup-main-block.component';
import {AfterPopupWindowComponent} from "../../shared/after-popup-window/after-popup-window.component";
import {PopupService} from "../../popup.service";

@Component({
  selector: 'app-main-top-block',
  templateUrl: './main-top-block.component.html',
  styleUrls: ['./main-top-block.component.scss'],
})
export class MainTopBlockComponent {

  constructor(private popupService: PopupService) {}

  openMainPopup() {
    this.popupService.openMainPopup();
  }



  // constructor(private matDialog: MatDialog) {}
  // public openMainPopup() {
  //   this.dialogRef = this.matDialog.open(PopupMainBlockComponent, {
  //     enterAnimationDuration: '700ms',
  //   });
  //
  //   this.dialogRef.afterClosed().subscribe((result) =>{
  //     if(result){
  //     this.matDialog.open(AfterPopupWindowComponent, {
  //       enterAnimationDuration: '700ms'
  //     })
  //     }
  // })
  // }


}

