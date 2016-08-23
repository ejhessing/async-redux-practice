import React from 'react'

import LoadSubreddit from './LoadSubreddit'
import SubredditContainer from '../containers/SubredditContainer'
import SubredditInput from './SubredditInput'

const App = () => (
  <div className='app-container'>
    <SubredditInput />
    <LoadSubreddit />
    <SubredditContainer />
  </div>
)

export default App
