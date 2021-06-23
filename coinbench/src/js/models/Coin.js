import axios from "axios";

export default class Coin {
  constructor(id) {
    this.id = id;
  };

  async getCoinData() {
    const res = await axios(
        `https://api.coincap.io/v2/assets/${this.id}`);
  
    
    this.name = res.data.data.name;
    this.symbol = res.data.data.symbol;
    this.price = res.data.data.priceUsd;
    this.marketCap = res.data.data.marketCapUsd;
    this.rank = res.data.data.rank;
    this.percentChange = res.data.data.changePercent24Hr;
    this.supply = res.data.data.supply;
    this.maxSupply = res.data.data.maxSupply;
    this.volume = res.data.data.volumeUsd24Hr;

    
  }
}