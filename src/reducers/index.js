import { combineReducers } from 'redux'
import location from './location'
import { filterOptions, filterValues } from './filterOptions'
import { mileOptions, mileValues } from './radiusMiles'

const reducer = combineReducers({
  location,
  filterOptions,
  filterValues,
  mileOptions,
  mileValues
})

export default reducer
