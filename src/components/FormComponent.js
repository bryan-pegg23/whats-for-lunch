import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setZipcode, chooseFilteroptions, updateRadius } from '../actions'

import HeaderComponent from './HeaderComponent'

const FormComponent = (props) => (
  <div className='Form'>
    <HeaderComponent />
    <input type='input' className='zipcode' placeholder='zipcode or address' onChange={props.setZipcode} />
    <Select simpleValue value={props.mileValues} options={props.mileOptions} onChange={props.updateRadius} />
    <Select multi simpleValue value={props.filterValues} options={props.filterOptions} onChange={props.chooseFilteroptions} />
    <input type='submit' value='Submit' className='submit' />
  </div>
)

// Functions called to make the state-store available
const mapStateToProps = ({ zipcode, filterOptions, filterValues, mileOptions, mileValues }) => ({ zipcode, filterOptions, filterValues, mileOptions, mileValues })
const mapPropsToDispatch = (dispatch) => bindActionCreators({ setZipcode, chooseFilteroptions, updateRadius }, dispatch)
const Form = connect(mapStateToProps, mapPropsToDispatch)(FormComponent)

export default Form
