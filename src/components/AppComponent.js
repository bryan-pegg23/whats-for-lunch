// React Imports
import React from 'react'

// CSS import
import '../App.css'

// Component Imports
import FormComponent from './formComponent'
import MapComponent from './mapComponent'
import FooterComponent from './footerComponent'

const AppComponent = props => (
  <div className='App'>
    <FormComponent />
    <MapComponent />
    <FooterComponent />
  </div>
)

export default AppComponent
