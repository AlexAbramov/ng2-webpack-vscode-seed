import { NgModule } from '@angular/core';
import { BrowserModule  }  from '@angular/platform-browser';
import { HttpModule  }  from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SnappyComponent } from './snappy/snappy.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'snappy', component: SnappyComponent },
  { path: '', redirectTo: 'snappy', pathMatch: 'full' },
  { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule?chunkName=lazy' },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent, SnappyComponent, AboutComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
