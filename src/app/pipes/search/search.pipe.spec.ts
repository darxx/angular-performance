import {SearchPipe} from './search.pipe';

describe('SearchPipe', () => {
  const pipe = new SearchPipe();

  it('create an instance', () => {
    expect(pipe.transform([
      {id: 'a'},
      {id: 'b'}
    ], 'id', 'a').length).toEqual(1);
  });
  it('create an instance', () => {
    expect(pipe.transform([
      {id: 'a'},
      {id: 'b'}
    ], 'id', null).length).toEqual(2);
  });
});
