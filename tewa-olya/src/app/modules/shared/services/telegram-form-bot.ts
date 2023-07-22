import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TelegramFormBotService {
  private botToken = '6508132109:AAGPMx2dS0-plEW_eTYRaievq6BIZ6czqC4';
  private chatId = '338046651';

  constructor(private httpService: HttpClient) {}

  public sendForm(formData: string) {
    this.httpService
      .get(
        `https://api.telegram.org/bot${this.botToken}/sendMessage?chat_id=${this.chatId}&parse_mode=html&text=${formData}`
      )
      .subscribe();
  }
}
