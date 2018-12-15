export default Redux.combineReducers({

  example: (state = {}, action) => {
    switch (action.type) {
      case 'SOME_ACTION': return { done: true }
      default: return state
    }
  },

  // ...

})
