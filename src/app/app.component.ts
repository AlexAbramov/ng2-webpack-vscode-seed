import { Component } from '@angular/core';
//import headerTemplate from './app.component.html';

@Component({
  selector: 'my-app',
//  moduleId: module.id,
  templateUrl: './app.component.html',
  providers: [    
  ]
})

export class AppComponent {
  title = 'Angular2 with Webpack';
  text='';
  constructor(){
  }

  test(){
    var d=new Date();
    this.text='Current time: '+d.toString();    
  }

}
