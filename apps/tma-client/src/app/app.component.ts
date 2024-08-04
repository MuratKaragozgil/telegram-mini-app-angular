import { Component, OnInit } from '@angular/core';
import { TelegramService } from './telegram.service';
import { BackendService } from './backend/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tma-client';

  constructor(
    private telegramService: TelegramService,
    private backendService: BackendService,
  ) {
    this.telegramService.ready();
    const initData = this.telegramService.getInitDataSafe();
    this.backendService.sendData(initData);
    console.log(initData);
  }

  ngOnInit(): void {}
}
