import { ListComponent } from './list.component';

describe('ListComponent', () => {
  const searchService: any = {
    model: {}
  };
  const component: ListComponent = new ListComponent(
    searchService
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
