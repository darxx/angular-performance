import {Component} from '@angular/core';
import {SearchService} from '../search/service/search.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html'
})
export class StatusComponent {
  constructor(
    public searchService: SearchService
  ) {
  }
}
