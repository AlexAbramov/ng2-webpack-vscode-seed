import { Component } from '@angular/core';

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
  }

  test(){
    var d=new Date();
    this.text='Current time: '+d.toString();    
  }

}
