import { SET_LOCATION } from '../actions'

const location = (state = '', action) => {
  switch (action.type) {
    case SET_LOCATION:
      return action.value
    default:
      return state
  }
}

export default location
