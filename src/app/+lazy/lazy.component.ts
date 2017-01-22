import { Component, OnInit } from '@angular/core';
import { Log } from '../core/log';

@Component({
  selector: 'lazy',
  templateUrl: './lazy.component.html',
  styleUrls:['./lazy.component.css']  
})
export class LazyComponent implements OnInit {
  constructor() { 
    Log.info('LazyComponent.constructor');    
  }

  ngOnInit() { }
}

Log.info('lazy.component.ts loaded');