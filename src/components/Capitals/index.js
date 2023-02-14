import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCountry: countryAndCapitalsList[0].id}

  changeStateValue = event => {
    this.setState({activeCountry: event.target.value})
  }

  gettingCountryDetails = selectedCapitalId => {
    const displayCountryDetails = countryAndCapitalsList.find(
      eachItem => eachItem.id === selectedCapitalId,
    )
    return displayCountryDetails
  }

  render() {
    const {activeCountry} = this.state
    const updatedCountry = this.gettingCountryDetails(activeCountry)
    console.log(activeCountry)
    return (
      <div className="main-container">
        <div className="countries-container">
          <h1 className="heading-style">Countries and Capitals</h1>
          <div className="dropdown-container">
            <select
              className="dropbox-style"
              value={activeCountry}
              onChange={this.changeStateValue}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  className="option-style"
                  value={eachItem.id}
                  key={eachItem.id}
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question-style"> is capital of which country</p>
          </div>
          <p className="country-name">{updatedCountry.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
