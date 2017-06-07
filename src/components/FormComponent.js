import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setLocation, chooseFilteroptions, updateRadius, submitForm } from '../actions'

import HeaderComponent from './HeaderComponent'

const FormComponent = (props) => (
  <form className='Form' onSubmit={props.submitForm}>
    <HeaderComponent />
    <input type='input' className='zipcode' placeholder='zipcode or address' onChange={props.setLocation} />
    <Select simpleValue value={props.mileValues} options={props.mileOptions} onChange={props.updateRadius} />
    <Select multi simpleValue value={props.filterValues} options={props.filterOptions} onChange={props.chooseFilteroptions} />
    <input type='submit' value='Submit' className='submit' />
  </form>
)

// Functions called to make the state-store available
const mapStateToProps = ({ location, filterOptions, filterValues, mileOptions, mileValues }) => ({ location, filterOptions, filterValues, mileOptions, mileValues })
const mapPropsToDispatch = (dispatch) => bindActionCreators({ setLocation, chooseFilteroptions, updateRadius, submitForm }, dispatch)
const Form = connect(mapStateToProps, mapPropsToDispatch)(FormComponent)

export default Form
