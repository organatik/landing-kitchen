import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AfterPopupWindowComponent } from '../after-popup-window/after-popup-window.component';
import { TelegramFormBotService } from '../services/telegram-form-bot';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PopupComponent {
  public form = this.formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    phone: '',
    order: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
  });

  public submitted = false;

  constructor(
    private ref: MatDialogRef<PopupComponent>,
    private afterPopupDialog: MatDialog,
    private formBuilder: FormBuilder,
    private telegramFormBotService: TelegramFormBotService,
  ) {}

  toppingList: string[] = ['Сніданок', 'Обід', 'Вечеря', 'Всі 3 меню'];
  closePopup() {
    this.ref.close();
  }

  afterSubmitPopup() {
    this.submitted = true;
    console.log(this.form);
    if (this.form.invalid) {
      return;
    }

    const formValue = this.form.value;
    const formattingText = `
      Нове замовлення: %0A
      Имя: ${formValue.name}%0A
      Фамилия: ${formValue.surname}%0A
      Telephone: ${formValue.name}%0A
      email: ${formValue.email}%0A
      ORDER: ${formValue.order}%0A
    `;

    // this.telegramFormBotService.sendForm(formattingText);

    this.afterPopupDialog.open(AfterPopupWindowComponent, {
      enterAnimationDuration: '1000ms',
    });
  }
}
