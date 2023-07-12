import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../popup/popup.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 public menuVariable = false;
 public menuBtnVariable = false
  public menuHeaderVariable = false

  constructor(
   private dialog:MatDialog
  ) {
  }
  openPopup(){
   this.dialog.open(PopupComponent,{
     enterAnimationDuration: '700ms'
   })
  }

  openMenu = () => {
    this.menuVariable = !this.menuVariable;
    this.menuBtnVariable = !this.menuBtnVariable;
    this.menuHeaderVariable =! this.menuHeaderVariable
  }
}
