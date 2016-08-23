import React from 'react'
import {connect} from 'react-redux'

const Alert = ({message}) => {
  return <div style={{color: "red"}}>{message}</div>
}

function mapStateToProps (state) {
  return {
    message: state.alert
  }
}

export default connect(mapStateToProps)(Alert)
