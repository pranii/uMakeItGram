import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextViewComponent } from './text-view/text-view.component';
import { StartComponent } from './start/start.component';
import { PathComponent } from './path/path.component';

@NgModule({
  declarations: [
    AppComponent,
    TextViewComponent,
    StartComponent,
    PathComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
