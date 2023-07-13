import {Component, HostListener} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../popup/popup.component";
import {PopupService} from "../../popup.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    this.menuVariable = false;
    this.menuBtnVariable = false
    this.menuHeaderVariable = false

    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;




    // console.log(pos, maxValueOfScroll)
    // if(maxValueOfScroll > pos){
    //   console.log('hello')
    // }

    console.log(pos,max)

  }

//   @HostListener("window:scroll", ["$event"])
//   onWindowScroll() {
//     console.log('hi')
// //In chrome and some browser scroll is given to body tag
//     let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
//
// // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
//     if(pos == max )   {
//       //Do your action here
//       console.log('hello world')
//     }
//   }

 public menuVariable = false;
 public menuBtnVariable = false
  public menuHeaderVariable = false

  constructor(private popupService: PopupService) {}
  openPopup(){
   this.popupService.openPopup()
  }

  openMenu = () => {
    this.menuVariable = !this.menuVariable;
    this.menuBtnVariable = !this.menuBtnVariable;
    this.menuHeaderVariable =! this.menuHeaderVariable
  }
}
