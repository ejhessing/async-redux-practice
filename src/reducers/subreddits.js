function subreddits (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_POSTS':
      return [
        ...state,
        ...action.posts
      ]

    case 'CLEAR_POST':
        return []

    default:
      return state
  }
}

export default subreddits
