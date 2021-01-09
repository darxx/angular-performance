import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SearchPipe} from './pipes/search/search.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ListComponent} from './list/list.component';
import {KeyPipe} from './pipes/key/key.pipe';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {OptionsComponent} from './options/options.component';
import {SearchComponent} from './search/search.component';
import {StatusComponent} from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    ListComponent,
    KeyPipe,
    OptionsComponent,
    SearchComponent,
    StatusComponent
  ],
  imports: [
    FontAwesomeModule,
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
