import { Component, OnInit } from '@angular/core';
import { Log } from '../core/log';

declare var angular_version: any;
declare var webpack_version: any;


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls:['./about.component.css']
})
export class AboutComponent implements OnInit {

  ver:any={};

  constructor() {
    Log.info('AboutComponent.constructor');
    this.ver.ng=angular_version;
    this.ver.webpack=webpack_version;
  }

  ngOnInit() { }
}

Log.info('about.component.ts loaded');