import './index.css'

const AppItem = ({appDetails}) => {
  const {appName, imageUrl} = appDetails

  return (
    <li className="list-app">
      <img src={imageUrl} alt={appName} className="app-img" />
      <p className="heading">{appName}</p>
    </li>
  )
}
export default AppItem
