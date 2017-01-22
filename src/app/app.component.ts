import { Component } from '@angular/core';
import { Log } from './core/log';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
  ]
})

export class AppComponent {
  title = 'Angular2 with Webpack';
  text='';
  constructor(){
    Log.info('AppComponent.constructor');
  }

}

Log.info('app.component.ts loaded');