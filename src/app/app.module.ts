import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProjectItemComponent } from './project-item/project-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule // 这个一般放在最后, 不然有可能会出异常
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
