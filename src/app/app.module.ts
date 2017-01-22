import { NgModule } from '@angular/core';
import { BrowserModule  }  from '@angular/platform-browser';
import { HttpModule  }  from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { SnappyComponent } from './snappy/snappy.component';
import { AboutComponent } from './about/about.component';
import { LogComponent } from './log/log.component';

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
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent, SnappyComponent, AboutComponent, LogComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
