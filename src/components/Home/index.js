// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'
import UploadFile from '../UploadFile'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <UploadFile />
        </div>
      </>
    )
  }
}

export default Home
