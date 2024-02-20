import LottoNumber from '../src/domain/entity/LottoNumber.js';

describe('로또 번호 테스트', () => {
  test('성공 케이스', () => {
    const LOTTO_NUMBER = '27';
    expect(() => new LottoNumber(LOTTO_NUMBER)).not.toThrow();
  });
  test('공백을 입력받았을 때, 에러를 발생시킨다.', () => {
    const BLANK = '';
    expect(() => new LottoNumber(BLANK)).toThrow('[Error]');
  });

  test.each(['a', '!'])(
    '숫자형이 아닌 문자를 입력 받았을 때, 에러를 발생시킨다.',
    NOT_NUMBER => {
      expect(() => new LottoNumber(NOT_NUMBER)).toThrow('[Error]');
    },
  );

  describe('입력한 숫자의 범위가', () => {
    test.each(['46', '9999'])(
      '45를 초과할 때, 에러를 발생시킨다.',
      NOT_NUMBER => {
        expect(() => new LottoNumber(NOT_NUMBER)).toThrow('[Error]');
      },
    );

    test.each(['0', '-555'])('1미만 일 때, 에러를 발생시킨다.', NOT_NUMBER => {
      expect(() => new LottoNumber(NOT_NUMBER)).toThrow('[Error]');
    });
  });
});
