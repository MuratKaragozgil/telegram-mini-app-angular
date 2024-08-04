import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TelegramWebApps } from 'telegram-webapps-types-new';
import BackButton = TelegramWebApps.BackButton;
import MainButton = TelegramWebApps.MainButton;
import { retrieveLaunchParams } from '@telegram-apps/sdk';

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private window;
  private readonly _tg: TelegramWebApps.WebApp;

  constructor(@Inject(DOCUMENT) private _document: any) {
    this.window = this._document.defaultView;
    this._tg = this.window.Telegram.WebApp;
  }

  get MainButton(): MainButton {
    return this._tg.MainButton;
  }

  get BackButton(): BackButton {
    return this._tg.BackButton;
  }

  sendData(data: object) {
    this._tg.sendData(JSON.stringify(data));
  }

  ready() {
    this._tg.ready();
  }

  getInitDataSafe() {
    return JSON.stringify(retrieveLaunchParams());
  }

  getInitDataUnSafe() {
    return this._tg.initDataUnsafe;
  }
}
