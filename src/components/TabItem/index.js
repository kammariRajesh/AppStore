// Write your code here
import {Component} from 'react'

import './index.css'

class TabItem extends Component {
  activeTab = () => {
    const {itemT, tabActive} = this.props
    const {tabId} = itemT
    tabActive(tabId)
  }

  render() {
    const {itemT, isActive} = this.props
    const {displayText} = itemT
    const className = isActive ? 'active-tab' : ''
    return (
      <li className="tab-list-item">
        <button
          type="button"
          className={`btn ${className}`}
          onClick={this.activeTab}
        >
          {displayText}
        </button>
      </li>
    )
  }
}
export default TabItem
