import { Component, Inject, ViewEncapsulation } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { AfterPopupWindowComponent } from '../after-popup-window/after-popup-window.component';
import { TelegramFormBotService } from '../services/telegram-form-bot';
import { FormBuilder, Validators } from '@angular/forms';
import { RecipesItems } from '../interfaces/recipesItems.interface';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PopupComponent {
  public form = this.formBuilder.group({
    name: ['', Validators.required],
    surname: [''],
    phone: ['', Validators.required],
    order: [[''], Validators.required],
    email: [''],
  });

  constructor(
    private ref: MatDialogRef<PopupComponent>,
    private afterPopupDialog: MatDialog,
    private formBuilder: FormBuilder,
    private telegramFormBotService: TelegramFormBotService,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {
    if (this.data) {
      this.form.patchValue({
        order: [data],
      });
    }
  }

  public recipesList = [
    RecipesItems.Breakfast,
    RecipesItems.Lunch,
    RecipesItems.Dinner,
    RecipesItems.AllRecipes,
  ];

  afterSubmitPopup() {
    this.form.markAllAsTouched();

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

    this.telegramFormBotService.sendForm(formattingText);
    this.ref.close();
    this.afterPopupDialog.open(AfterPopupWindowComponent, {
      enterAnimationDuration: '1000ms',
    });
  }
}
