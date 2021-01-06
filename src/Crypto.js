import React, { Component } from 'react'
import './crypto.css';

export default class App extends Component {

  priceContainer() {

    var Data = this.props.data
    var res = []
    var title  = this.props.name
    title = title.charAt(0).toUpperCase() + title.slice(1);

    var owned = Number(this.props.qtd) * Number(Data.current_price)

    var content = (
      <React.Fragment key={`${this.props.fiat}`}>
        <div className="crypto">
          <span>{title}</span>
          <img className="crypto-icon" src={Data.image} alt={title} />
        </div>
        <div className="recent-price">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: this.props.fiat }).format(Data.current_price)}</div>
        <div className="owned-value">Owned: {this.props.qtd} </div>
        <div className="user-owned-value">Value: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: this.props.fiat }).format(owned)}</div>
        <div className="price-change">
          <span className={Data.price_change_percentage_1h_in_currency > 0 ? 'positive' : 'negative'}>{(Data.price_change_percentage_1h_in_currency).toFixed(2)}% 1H</span>
          <span className={Data.price_change_percentage_24h_in_currency > 0 ? 'positive' : 'negative'}>{(Data.price_change_percentage_24h_in_currency).toFixed(2)}% 1D</span>
          <span className={Data.price_change_percentage_7d_in_currency > 0 ? 'positive' : 'negative'}>{(Data.price_change_percentage_7d_in_currency).toFixed(2)}% 7D</span>
        </div>
      </React.Fragment>
    )
    res.push(content)

    return(
      <React.Fragment>
        {res}
      </React.Fragment>
    )
  }


  render() {
    return (
      <React.Fragment>
        <div id={`${this.props.name}`} className="price-container">
          {this.priceContainer()}
        </div>
      </React.Fragment>
    )
  }

}


