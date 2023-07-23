import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})


// export class TelegramFormBotService {
//   private botToken = '6508132109:AAGPMx2dS0-plEW_eTYRaievq6BIZ6czqC4';
//   private chatId = '338046651';
//   private chatIdVasyl = '664645421';
//   private chatIdSeredaOlga = '5135402412';
//
//   private chatIdVakulenkoYuliia = '125606045'
//
//   constructor(private httpService: HttpClient) {}
//
//   public sendForm(formData: string) {
//     this.httpService
//       .get(
//         `https://api.telegram.org/bot${this.botToken}/sendMessage?chat_id=${this.chatIdVakulenkoYuliia}&parse_mode=html&text=${formData}`,
//
//       )
//       .subscribe();
//   }
// }


//
// .get(
//   `https://api.telegram.org/bot${this.botToken}/sendMessage?chat_id=${this.chatIdVasyl}&parse_mode=html&text=${formData}`,
// )
//   .get(
//     `https://api.telegram.org/bot${this.botToken}/sendMessage?chat_id=${this.chatIdSeredaOlga}&parse_mode=html&text=${formData}`,
//   )



export class TelegramFormBotService {
  private botToken = '6508132109:AAGPMx2dS0-plEW_eTYRaievq6BIZ6czqC4';
  private myChatId = '5075411916'
  private chatIdVakulenkoVasyl = '664645421';
  private chatIdSeredaOlga = '5135402412';
  private chatIdVakulenkoYuliia = '125606045';
  private chatIds = [this.myChatId, this.chatIdVakulenkoVasyl, this.chatIdSeredaOlga, this.chatIdVakulenkoYuliia];


  constructor(private httpService: HttpClient) {
  }
    public sendForm(formData: string) {
      this.chatIds.forEach((chatId) =>{
        this.httpService
          .get(
            `https://api.telegram.org/bot${this.botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${formData}`,

          )
          .subscribe();
      })
    }
}
