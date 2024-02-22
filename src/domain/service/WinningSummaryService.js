import LottoNumberList from '../entity/LottoNumberList.js';
import WinningLotto from '../entity/WinningLotto.js';

class WinningResultService {
  #lottos;
  #winningLotto;

  constructor(lottos, winningLottoObj) {
    this.#lottos = lottos.map(lotto => new LottoNumberList(lotto));
    this.#winningLotto = new WinningLotto(winningLottoObj.numbers);
    this.#winningLotto.setBonusNumber(winningLottoObj.bonusNumber);
  }

  getWinningResult() {
    const result = { 3: 0, 4: 0, 5: 0, '5-1': 0, 6: 0 };

    this.#lottos
      .map(lotto => this.#winningLotto.getMatchCounts(lotto.getNumbers()))
      .forEach(matched => {
        result[matched] += 1;
      });
    return result;
  }
}

export default WinningResultService;