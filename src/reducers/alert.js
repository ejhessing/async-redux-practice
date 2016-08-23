const alert = (state = '', action) => {
  switch (action.type) {
    case 'ERROR':
      return action.message

    default:
      return state
  }
}

export default alert
