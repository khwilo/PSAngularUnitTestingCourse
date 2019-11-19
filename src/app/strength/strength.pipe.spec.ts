import { StrengthPipe } from './strength.pipe';

describe('StengthPipe', () => {
  it('should display weak if strength is 5', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(5)).toEqual('5 (weak)');
  });

  it('should display strong if strength is 10', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(10)).toEqual('10 (strong)');
  });

  it('should display unbelievable if strength is 30', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(30)).toEqual('30 (unbelievable)');
  });
});
