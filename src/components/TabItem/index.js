import './index.css'

const TabItem = ({isActive, updateActiveTab, tabDetails}) => {
  const {id, displayText} = tabDetails

  const clickActiveTab = () => {
    updateActiveTab(id)
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
