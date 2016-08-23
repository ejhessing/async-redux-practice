import React from 'react'

import LoadSubreddit from './LoadSubreddit'
import SubredditContainer from '../containers/SubredditContainer'
import SubredditInput from './SubredditInput'
import Alert from './Alert'

const App = () => (
  <div className='app-container'>
    <Alert />
    <SubredditInput />
    <LoadSubreddit />
    <SubredditContainer />
  </div>
)

export default App
