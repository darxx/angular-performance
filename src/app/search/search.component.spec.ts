import {SearchComponent} from './search.component';

describe('SearchComponent', () => {
  const searchService: any = {
    model: {},
    onSearch: jasmine.createSpy('onSearch')
  };
  const component: SearchComponent = new SearchComponent(
    searchService
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
