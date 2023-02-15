import './index.css'

const DestinationItem = props => {
  const {itemDetails} = props
  const {name, imgUrl} = itemDetails
  return (
    <li className="card-container">
      <img src={imgUrl} alt={name} className="card-image" />
      <p className="card-para">{name}</p>
    </li>
  )
}
export default DestinationItem
