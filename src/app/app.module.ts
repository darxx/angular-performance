import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchPipe } from './pipes/search/search.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    ListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [
    SearchPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
