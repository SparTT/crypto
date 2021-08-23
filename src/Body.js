import React, { Component } from 'react'
import Crypto from './Crypto.js';
import GetValue from './InputValue'
import './body.css'

var btcBC = 0.10077885
var btcBFi = 0
var btc = {
  name: 'Bitcoin',
  qtd: btcBC + btcBFi
}

var xmr = {
  name: 'Monero',
  qtd: 2.019590980000
}


var ethBFi = 1.21323169
var ethBC = 0.00058593
var eth = {
  name: 'Ethereum',
  qtd: ethBFi + ethBC
}

var dash = {
  name: 'Dash',
  qtd: 0
}

var nano = {
  name: 'Nano',
  qtd: 0
}

var nuls = {
  name: 'Nuls',
  qtd: 0
}

var dogecoin = {
  name: 'Dogecoin',
  qtd: 0
}

var slp = {
  name: 'smooth-love-potion',
  qtd: 356
}


var user = {
  fiatCurrencies: 'brl',
  data: [btc, xmr, eth, dash, nano, nuls, dogecoin, slp]
}

var cryptos = ''
user.data.forEach(function(el, i) {
  cryptos += `${el.name},`
})
user.cryptos = cryptos


export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        Price: []
    }
  }

  
getPrice() {
  var vs_currencies = user.fiatCurrencies // fiat coin pra comparar
  var id = encodeURIComponent(user.cryptos.toLowerCase())
  // https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vs_currencies}&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h

   fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vs_currencies}&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h,24h,7d`)
   .then(resp => resp.json())
   .then(resp => {
     this.setState({
       isLoaded: true,
       Price: resp
     })
   }).catch(error => {
     this.setState({
       error: error
     })
   })
 }
 
 componentDidMount() {
    this.getPrice()
    setInterval( () => {
      this.getPrice()
    }, 1000 * 10)
 }


  render() {
    const { error, isLoaded, Price } = this.state 
    if (isLoaded === false) {
      return (
        <div className="loading-gif">
          <h2>Carregando</h2>
          <i className="fa fa-circle-o-notch fa-5x" aria-hidden="true"></i>
        </div>
      )
    }else if (error !== null) {
      return <div className="error">{error}</div>
    }else {

      var res = []
      var userQtd = 0
      var totalFiat = 0

      for(var i = 0; i < user.data.length; i++) {
        for(var j = 0; j < user.data.length; j++) {
          if(user.data[j].name.toLowerCase() === Price[i].id.toLowerCase()) {
            var totalInCrypto = Number(Price[i].current_price) * Number(user.data[j].qtd)
            totalFiat += totalInCrypto
            userQtd = user.data[j].qtd
          }
        }
        var content = <Crypto key={`${Price[i].id}-${[i]}`} name={Price[i].id} data={Price[i]} qtd={userQtd} fiat={user.fiatCurrencies} />
        res.push(content)
      }

      return (
        <div className="container">
          <GetValue data={Price} currency={user.fiatCurrencies}/>
          <div className="total-container">
            <h2 className="title">Total em conta</h2>
            <div className="total-fiat">
            <h3>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: user.fiatCurrencies }).format(totalFiat)}</h3>
            </div>
          </div>
          <div className="crypto-container">
            <h3 className="title">Crypto Prices</h3>
            {res}
          </div>
        </div>
      )
    }
  }

}