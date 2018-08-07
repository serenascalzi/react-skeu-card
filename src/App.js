import React, { Component } from 'react'
import './App.css'
import valid from 'card-validator'

/*
JCB | 351 | 16
AMERICAN EXPRESS | 371 | 15
DINERS CLUB | 381 | 14
VISA | 411 | 16
MAESTRO | 501 | 16
MASTERCARD | 511 | 16
DISCOVER | 601 | 16
UNIONPAY | 621 | 16
*/

class App extends Component {
  state = {
  	number:'',
    type:'',
    icon:'',
    name:'',
    date:'',
    border:'none'
    //cvv:''
  }
  
  componentDidMount(){
  	console.log(valid)
  }

  handleChangeType = (e) => {
    this.setState({
      number:e.target.value
    })
    
  	var numberValidation = valid.number(e.target.value)

    if (!numberValidation.isPotentiallyValid) {
      console.log('Invalid Number')
      this.setState({
        border:'3px solid red'
      })
    }

    else if (numberValidation.card) {
      console.log('Valid Number')
      if (numberValidation.card.type === 'jcb') {
        this.setState({
          type:'jcb',
          icon:'fa fa-cc-jcb',
          border:'none'
        })
      } else if (numberValidation.card.type === 'american-express') {
        this.setState({
          type:'american-express',
          icon:'fa fa-cc-amex',
          border:'none'
        })
      } else if (numberValidation.card.type === 'diners-club') {
        this.setState({
          type:'diners-club',
          icon:'fa fa-cc-diners-club',
          border:'none'
        })
      } else if (numberValidation.card.type === 'visa') {
        this.setState({
          type:'visa',
          icon:'fa fa-cc-visa',
          border:'none'
        })
      } else if (numberValidation.card.type === 'maestro') {
        this.setState({
          type:'maestro',
          icon:'maestro icon',
          border:'none'
        })
      } else if (numberValidation.card.type === 'mastercard') {
        this.setState({
          type:'mastercard',
          icon:'fa fa-cc-mastercard',
          border:'none'
        })
      } else if (numberValidation.card.type === 'discover') {
        this.setState({
          type:'discover',
          icon:'fa fa-cc-discover',
          border:'none'
        })
      } else if (numberValidation.card.type === 'unionpay') {
        this.setState({
          type:'unionpay',
          icon:'unionpay icon',
          border:'none'
        })
      }
    }
  }

  handleChangeName = (e) => {
    this.setState({
      name:e.target.value
    })
  }

  handleChangeDate = (e) => {
    this.setState({
      date:e.target.value
    })
    
    var dateValidation = valid.expirationDate(e.target.value)

    if (!dateValidation.isPotentiallyValid) {
      console.log('Invalid Date')
      this.setState({
        border:'3px solid red'
      })
    }

    else {
      console.log('Valid Date')
    }
  }

  /*
  handleChangeCVV = (e) => {
    this.setState({
      cvv:e.target.value
    })
    
    var cvvValidation = valid.cvv(e.target.value)

    if (!cvvValidation.isPotentiallyValid) {
      console.log('Invalid CVV')
    }

    else {
      console.log('Valid CVV')
    }
  }

  <p>{this.state.cvv}</p>
  <input type="text" name="cardCVV" placeholder="XXXX" maxLength="4" pattern="[0-9]{4}" value={this.state.cvv} onChange={this.handleChangeCVV} required />
  */  

  render() {
    return (
      <div>
        <div className="cardDesign" style={{border:this.state.border}}>
          <div className="ccChip"></div>
          <p className="ccNumber">{this.state.number}</p>
          <p className="ccIcon"><i className={`${this.state.icon}`}></i></p>
          <p className="ccExpDate">{this.state.date}</p>
          <p className="ccName">{this.state.name}</p>
        </div>
        <div className="cardForm">
          <form>
          	<input type="text" name="cardNumber" placeholder="CARD NUMBER" maxLength="16" pattern="[0-9]{16}" value={this.state.number} onChange={this.handleChangeType} required /><br />
            <input type="text" name="cardName" placeholder="YOUR NAME" maxLength="16" pattern="[A-Za-z]{16}" value={this.state.name} onChange={this.handleChangeName} required /><br />
            <input type="text" name="cardExpDate" placeholder="MMYY" maxLength="4" pattern="[0-9]{4}" value={this.state.date} onChange={this.handleChangeDate} required />
          </form>
        </div>
      </div>
    )
  }
}

export default App
