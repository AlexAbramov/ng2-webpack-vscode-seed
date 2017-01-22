import { Component, OnInit } from '@angular/core';
import { Log } from '../core/log';

@Component({
  selector: 'log',
  templateUrl: './log.component.html',
  styleUrls:['./log.component.css']
})

export class LogComponent {

  get messages():string[]{return Log.messages;}

  constructor() {
    Log.info('LogComponent.constructor');
  }

}

Log.info('log.component.ts loaded');
