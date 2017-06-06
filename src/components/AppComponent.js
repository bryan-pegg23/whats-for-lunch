// React Imports
import React from 'react'

// CSS import
import '../App.css'

// Component Imports
import FormComponent from './FormComponent'
import MapComponent from './MapComponent'
import FooterComponent from './FooterComponent'

const AppComponent = props => (
  <div className='App'>
    <FormComponent />
    <MapComponent />
    <FooterComponent />
  </div>
)

export default AppComponent
