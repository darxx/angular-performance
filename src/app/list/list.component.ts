import {Component} from '@angular/core';
import {SearchService} from '../search/service/search.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  constructor(
    public searchService: SearchService
  ) {
  }
}
