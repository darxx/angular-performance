import {OptionsComponent} from './options.component';
import {FormControl} from '@angular/forms';

describe('OptionsComponent', () => {
  const searchService: any = {
    model: {
      isCacheEnabled: new FormControl(true),
      cache: {1: []}
    }
  };
  const component: OptionsComponent = new OptionsComponent(
    searchService
  );

  it('should be able to change state', () => {
    expect(component).toBeTruthy();
  });
});
