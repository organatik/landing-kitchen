import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 public menuVariable = false;
 public menuBtnVariable = false
  public menuHeaderVariable = false
  openMenu = () => {
    this.menuVariable = !this.menuVariable;
    this.menuBtnVariable = !this.menuBtnVariable;
    this.menuHeaderVariable =! this.menuHeaderVariable
  }
}
