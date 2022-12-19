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
  state = {activeCountry: countryAndCapitalsList[0]}

  changeStateValue = event => {
    const selectedCapital = event.target.value
    this.gettingCountryDetails(selectedCapital)
  }

  gettingCountryDetails = selectedCapital => {
    const displayCountryDetails = countryAndCapitalsList.find(
      eachItem => eachItem.capitalDisplayText === selectedCapital,
    )
    console.log(displayCountryDetails)
    this.setState({activeCountry: displayCountryDetails})
  }

  render() {
    const {activeCountry} = this.state
    const updatedCountryId = activeCountry.id
    // const capitalId = activeCountry.id
    return (
      <div className="main-container">
        <div className="countries-container">
          <h1 className="heading-style">Countries and Capitals</h1>
          <div className="dropdown-container">
            <select
              className="dropbox-style"
              onChange={this.changeStateValue}
              value={updatedCountryId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option className="option-style" key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question-style"> is capital of which country</p>
          </div>
          <p className="country-name">{activeCountry.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
