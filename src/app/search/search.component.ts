import {Component} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {SearchService} from './service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  icon = faSearch;
  constructor(
    public searchService: SearchService
  ) {
    this.searchService.model.search.setValue('');
  }

}
