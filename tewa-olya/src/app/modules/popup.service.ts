import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './shared/popup/popup.component';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private dialog: MatDialog) {}
  openPopup() {
    this.dialog.open(PopupComponent, {
      enterAnimationDuration: '700ms',
    });
  }
}
