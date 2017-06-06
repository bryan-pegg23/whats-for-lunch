import { RADIUS } from '../actions'

export const mileOptions = (state = [{value: '1 mile', label: '1 mile'},
        {value: '2 miles', label: '2 miles'},
        {value: '3 miles', label: '3 miles'},
        {value: '4 miles', label: '4 miles'},
        {value: '5 miles', label: '5 miles'},
        {value: '10 miles', label: '10 miles'},
        {value: '15 miles', label: '15 miles'},
        {value: '20 miles', label: '20 miles'},
        {value: '25 miles', label: '25 miles'}],
        action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const mileValues = (state = '', action) => {
  switch (action.type) {
    case RADIUS:
      return action.value
    default:
      return state
  }
}

export default mileOptions
