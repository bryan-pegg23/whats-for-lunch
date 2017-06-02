import React from 'react'
// import Select from 'react-select'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { ZIPCODE } from '../actions/index'
import HeaderComponent from './headerComponent'

const FormComponent = () => (
  <div className='Form'>
    <HeaderComponent />
    {/* <input type='input' className='zipcode' placeholder='zipcode or address' value={this.state.zipcode} onChange={this.changeZipcode} /> */}
    {/* <Select simpleValue value={this.state.radius} options={this.state.mileOptions} onChange={this.changeRadius} /> */}
    {/* <Select multi simpleValue value={this.state.value} options={this.state.options} onChange={this.handleChange} /> */}
    <input type='submit' value='Submit' className='submit' />
  </div>
)

// Functions called to make the state-store available but not sure how to make it work without states in the components

// const mapStateToProps = ({ zipcode }) => ({ zipcode })
// const mapPropsToDispatch = (dispatch) => bindActionCreators({ ZIPCODE }, dispatch)
//
// const Form = connect(mapStateToProps, mapPropsToDispatch)(FormComponent)

export default FormComponent
