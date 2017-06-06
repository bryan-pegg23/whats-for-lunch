import { FILTER_VALUES } from '../actions'

export const filterOptions = (state = [{value: 'Food', label: 'Food'},
        {value: 'Restaurant', label: 'Restaurant'},
        {value: 'Bar', label: 'Bar'},
        {value: 'Mexican', label: 'Mexican'},
        {value: 'Bar and Grill', label: 'Bar and Grill'},
        {value: 'Italian', label: 'Italian'},
        {value: 'Fast Food', label: 'Fast Food'},
        {value: 'Seafood', label: 'Seafood'},
        {value: 'Chinese', label: 'Chinese'}],
        action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const filterValues = (state = '', action) => {
  switch (action.type) {
    case FILTER_VALUES:
      return action.value
    default:
      return state
  }
}

export default filterOptions
