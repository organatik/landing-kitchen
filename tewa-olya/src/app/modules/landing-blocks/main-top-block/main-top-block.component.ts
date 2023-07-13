import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PopupMainBlockComponent} from "../../shared/popup-main-block/popup-main-block.component";

@Component({
  selector: 'app-main-top-block',
  templateUrl: './main-top-block.component.html',
  styleUrls: ['./main-top-block.component.scss']
})
export class MainTopBlockComponent {

  success: boolean = true;
  dialogRef?: MatDialogRef<PopupMainBlockComponent>
constructor(private matDialog: MatDialog) {}
  public openMainPopup(){
   this.dialogRef = this.matDialog.open(PopupMainBlockComponent,{
      enterAnimationDuration: '700ms'
    })

    this.dialogRef.afterClosed().subscribe((result: boolean) =>{
      console.log('click')
      this.success = result
  })
  }
}
