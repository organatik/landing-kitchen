import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TelegramFormBotService {
  private botToken = '5888586424:AAGp06FzYCylNjUGgwJhDbRxxaQlMa-vfjs';
  private chatId = '5075411916';

  constructor(private httpService: HttpClient) {}

  public sendForm(formData: string) {
    this.httpService
      .get(
        `https://api.telegram.org/bot${this.botToken}/sendMessage?chat_id=${this.chatId}&parse_mode=html&text=${formData}`
      )
      .subscribe();
  }
}
