import {Component} from '@angular/core';
import {SearchService} from '../search/service/search.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html'
})
export class OptionsComponent{
  constructor(
    public searchService: SearchService
  ) {
  }
}
