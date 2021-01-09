import {KeyPipe} from './key.pipe';

describe('KeyCountPipe', () => {
  const pipe = new KeyPipe();
  it('Should get array from object', () => {
    expect(pipe.transform({id: true}).length).toEqual(1);
  });
  it('Should get empty array from null', () => {
    expect(pipe.transform(null).length).toEqual(0);
  });
});
