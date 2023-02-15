// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeOfSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    return (
      <div>
        <div className="bg-container">
          <h1 className="heading">Destination Search</h1>
          <div className="input-container">
            <input
              type="search"
              placeholder="search"
              onChange={this.onChangeOfSearchInput}
              value={searchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          <ul>
            {destinationsList
              .filter(eachItem =>
                eachItem.name.toLowerCase().includes(searchInput),
              )
              .map(eachItem => (
                <DestinationItem itemDetails={eachItem} key={eachItem.id} />
              ))}
          </ul>
        </div>
      </div>
    )
  }
}

/* const DestinationSearch = props => {
  const {destinationsList} = props
  let searchInput = ''

  return (
    <div>
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="input-container">
          <input type="search" placeholder="search" />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul>
          {destinationsList.map(eachItem => (
            <DestinationItem itemDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
*/
export default DestinationSearch
