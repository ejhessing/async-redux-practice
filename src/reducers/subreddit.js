const subreddit = (state = 'newzealand', action) => {
  switch (action.type) {
    case 'SET_SUBREDDIT':
      return action.subreddit
    default:
      return state
  }
}

export default subreddit
