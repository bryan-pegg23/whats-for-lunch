import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const MapComponent = (props) => (
  <div className='Map'>
    {console.log(props)}
    {/* {this.state.locationFound && */}
    <div className='map-container'>
      {/* <h3 className={this.state.h3_name}>{this.state.finalResult.name}</h3> */}
      {/* {this.state.mapvisible && */}
      <iframe title='map' className='map' frameBorder='0' marginHeight='0' marginWidth='0' src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCFw2_zwa1UWEu3fFtIv0R6amXGw--fgdo&q=place_id:ChIJDTRn7VyuEmsRkSFggW9wNIs`} />
      {/* } */}
    </div>
    {/* } */}
  </div>
)

const mapStateToProps = ({ key }) => ({ key })
const mapPropsToDispatch = (dispatch) => bindActionCreators({}, dispatch)
const MapComp = connect(mapStateToProps, mapPropsToDispatch)(MapComponent)

export default MapComp
