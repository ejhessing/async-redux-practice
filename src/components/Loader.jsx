import React from 'react'
import {connect} from 'react-redux'
//import myLoader from "../lib/loader"

const Loader = React.createClass({
  componentDidUpdate () {
    if (this.props.loader) {
      myLoader()
    }
  },
  render () {
    if(this.props.loader) {
      return (
        <div id="loader_container"><svg id="loader"></svg></div>
      )
    } else {
      return null
    }
  }
})

function mapStateToProps (state) {
  return {
    loader: state.loader
  }
}

export default connect(mapStateToProps)(Loader)
