import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;

  beforeEach(async () => {
    component = new ListComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
