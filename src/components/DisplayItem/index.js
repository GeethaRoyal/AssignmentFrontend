import './index.css'

const DisplayItem = ({data}) => {
  const {body, id, title, userId} = data
  return (
    <li className="row-item">
      <p className="col-item-user">{userId}</p>
      <p className="col-item-id">{id}</p>
      <p className="col-item-title">{title}</p>
      <p className="col-item-body">{body}</p>
    </li>
  )
}

export default DisplayItem
