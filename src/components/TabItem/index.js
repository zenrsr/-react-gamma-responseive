import './index.css'

const TabItem = ({isActive, updateActiveTab, tabDetails}) => {
  const {tabId, displayText} = tabDetails

  const clickActiveTab = () => {
    updateActiveTab(tabId)
  }

  const activeTabClass = isActive ? 'active-tab' : ''

  return (
    <li className="list-item" onClick={clickActiveTab}>
      <button type="button" className={`tab-btn ${activeTabClass}`}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
