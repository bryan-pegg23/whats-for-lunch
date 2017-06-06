import { SET_ZIPCODE } from '../actions'

const zipcode = (state = '', action) => {
  switch (action.type) {
    case SET_ZIPCODE:
      return action.value
    default:
      return state
  }
}

export default zipcode
