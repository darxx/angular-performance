import {SearchPipe} from 'src/app/pipes/search/search.pipe';
import {SearchService} from './search.service';
import {fakeAsync, tick} from '@angular/core/testing';


describe('SearchService', () => {

  const usersService: any = {
    model: {},
    generateUsers: jasmine.createSpy('generateUsers').and.returnValue([
      {
        name: 'Da',
        title: 'none',
        src: 'none'
      },
      {
        name: 'Dar',
        title: 'none',
        src: 'none'
      },
      {
        name: 'Dari',
        title: 'none',
        src: 'none'
      },
      {
        name: 'Darius',
        title: 'none',
        src: 'none'
      }
    ])
  };
  const service: SearchService = new SearchService(
    new SearchPipe(),
    usersService
  );


  it('should be able to search', fakeAsync(() => {
    service.model.isCacheEnabled.setValue(false);
    service.model.search.setValue('da');
    tick(250);
    expect(service.model.users.length).toEqual(4);
    service.model.search.setValue('dariu');
    tick(250);
    expect(service.model.users.length).toEqual(1);

    expect(Object.keys(service.model.cache).length).toEqual(0);
  }));
  it('should be able to search using cache', fakeAsync(() => {
    service.model.cache = {};
    service.model.isCacheEnabled.setValue(true);
    service.model.search.setValue('da');
    tick(250);
    expect(service.model.users.length).toEqual(4);
    service.model.search.setValue('dariu');
    tick(250);
    expect(service.model.users.length).toEqual(1);

    expect(Object.keys(service.model.cache).length).toEqual(2);
  }));
  it('should be able to search using optimized cache', fakeAsync(() => {
    service.model.cache = {};
    service.model.isCacheEnabled.setValue(true);
    service.model.search.setValue('da');
    tick(250);
    expect(service.model.users.length).toEqual(4);
    service.model.search.setValue('dar');
    tick(250);
    expect(service.model.users.length).toEqual(3);

    expect(Object.keys(service.model.cache).length).toEqual(2);
  }));
});
