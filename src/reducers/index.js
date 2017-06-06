import { combineReducers } from 'redux'
import zipcode from './zipcode'
import { filterOptions, filterValues } from './filterOptions'
import { mileOptions, mileValues } from './radiusMiles'

const reducer = combineReducers({
  zipcode,
  filterOptions,
  filterValues,
  mileOptions,
  mileValues
})

export default reducer
