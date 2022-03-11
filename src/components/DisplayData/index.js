import {Component} from 'react'
import {Button} from 'react-bootstrap'
import Header from '../Header'
import DisplayItem from '../DisplayItem'

import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'

class DisplayData extends Component {
  state = {Dataobtained: []}

  getData = async () => {
    const url = 'http://localhost:3001/'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    this.setState({Dataobtained: data})
  }

  render() {
    const {Dataobtained} = this.state
    return (
      <>
        <Header />
        <div className="m-4">
          <Button onClick={this.getData} className="my-4">
            Show Extracted Data
          </Button>
          <div className="bg-primary text-white">
            <h5>Extracted Data</h5>
            <ul className="display-ul">
              <li className="row-header">
                <p className="user">USERID</p>
                <p className="id">ID</p>
                <p className="title">TITLE</p>
                <p className="body">BODY</p>
              </li>

              {Dataobtained.map(each => {
                const {id} = each
                return <DisplayItem key={id} data={each} />
              })}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default DisplayData
