import { Component, OnInit } from '@angular/core';
import { Log } from '../core/log';

@Component({
  selector: 'snappy',
  templateUrl: './snappy.component.html',
  styleUrls:['./snappy.component.css']
})
export class SnappyComponent implements OnInit {
  constructor() { 
    Log.info('SnappyComponent.constructor');    
  }

  ngOnInit() { }
}

Log.info('snappy.component.ts loaded');
