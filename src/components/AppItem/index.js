// Write your code here
import {Component} from 'react'

import './index.css'

class AppItem extends Component {
  render() {
    const {itemA} = this.props
    const {imageUrl, appName} = itemA
    return (
      <li className="app-bg">
        <img src={imageUrl} alt={appName} className="app-img" />
        <p className="app-name">{appName}</p>
      </li>
    )
  }
}
export default AppItem
