import { StatusComponent } from './status.component';

describe('StatusComponent', () => {
  const searchService: any = {

  };
  const component: StatusComponent = new StatusComponent(
    searchService
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
