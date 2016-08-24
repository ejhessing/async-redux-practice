function subreddits (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_POSTS':
      return [
        ...action.posts
      ]

    case 'CLEAR_POST':
        return []

    default:
      return state
  }
}

export default subreddits
