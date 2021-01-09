import { AppComponent } from './app.component';
import {fakeAsync, tick} from '@angular/core/testing';

describe('AppComponent', () => {
  const searchPipe: any = {
    transform: jasmine.createSpy('transform').and.callThrough()
  };
  const usersService: any = {
    generateUsers: jasmine.createSpy('generateUsers').and.returnValue([
      {
        name: 'Darius',
        title: 'Developer',
        sec: '/assets/3.gif',
      }
    ])
  };

  const component: AppComponent = new AppComponent(
    searchPipe,
    usersService
  );

  it('should be able to create', () => {
    expect(component).toBeTruthy();
    expect(usersService.generateUsers).toHaveBeenCalledWith(1000000);
  });
  it('should be able search value', fakeAsync(() => {
    component.ngOnInit();
    component.search.setValue('Darius');
    tick(250);
    expect(searchPipe.transform).toHaveBeenCalled();
    expect(component.performance).toEqual('0ms');
  }));

});
