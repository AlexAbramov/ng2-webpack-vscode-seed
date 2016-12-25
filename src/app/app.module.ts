import { NgModule } from '@angular/core';
import { BrowserModule  }  from '@angular/platform-browser';
import { HttpModule  }  from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SnappyComponent } from './snappy/snappy.component';

const routes: Routes = [
  { path: 'snappy', component: SnappyComponent },
  { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule' }
];


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent, SnappyComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
