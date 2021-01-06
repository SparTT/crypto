import React, { Component } from 'react'
import './InputValue.css'
export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      comparator: 1,
      cryptoName: null,
      Data: []
    }
  }

  componentDidMount() {
    console.log(this.props.data)
    this.setState({
      cryptoName: this.props.data[0].symbol,
    })
  }


  setValue(e) {
    this.setState({
      comparator: e.target.value,
    })
  }

  setCrypto(e) {
    this.setState({
      cryptoName: e.target.value,
    })
  }


  options() {
  var Data = this.props.data
   return(
      Data.map( (val) => {
        return <option key={val.id} value={val.symbol}>{val.id}</option>
      })
    )
  }


  render() {
    const { comparator, cryptoName } = this.state

    var cryptoValue = 0
    for(var i = 0; i < this.props.data.length; i++) {
      if(cryptoName === this.props.data[i].symbol) {
        cryptoValue =this.props.data[i].current_price
      }
    }

    var res = Number(comparator) * Number(cryptoValue)

    return (
    <React.Fragment>
      <div className="result-value">{comparator} {cryptoName} = {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: this.props.currency }).format(res)}</div>
      <div className="input-container">
        <input type="number" value={comparator} onChange={e => this.setValue(e)}/>
        <select onChange={e => this.setCrypto(e)}>
          {this.options()}
        </select>
      </div>
    </React.Fragment>
    )
  }

}