export const RADIUS = 'RADIUS'
export const FILTER_VALUES = 'FILTER_VALUES'
export const SET_LOCATION = 'SET_LOCATION'
export const FILTER_OPTIONS = 'FILTER_OPTIONS'
export const MILE_OPTIONS = 'MILE_OPTIONS'
export const RESULTS = 'RESULTS'
export const CENTER = 'CENTER'
export const LOCATION_FOUND = 'LOCATION_FOUND'
export const MAP_VISIBLE = 'MAP_VISIBLE'
export const FINAL_RESULT = 'FINAL_RESULT'
export const PLACE_ID = 'PLACE_ID'
export const FINAL_RESULT_CLASS_NAME = 'FINAL_RESULT_CLASS_NAME'
export const SUBMIT = 'SUBMIT'

export const setLocation = ({ target: { value } }) => {
  return {
    type: SET_LOCATION, value
  }
}

export const chooseFilteroptions = (value) => {
  return {
    type: FILTER_VALUES, value
  }
}

export const updateRadius = (value) => {
  return {
    type: RADIUS, value
  }
}

export const submitForm = (event) => {
  event.preventDefault()
  return {
    type: SUBMIT, event
  }
}
