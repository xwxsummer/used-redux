function postComments(state = [], action) {
    return [...state, action.comment];
}

function commentReducer(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
      if(typeof action.postId !== 'undefined') {
        return {
          ...state,
          [action.postId]: postComments(state[action.postId], action)
        }
      }
      case 'LOAD_COMMENTS':
        return action.comments
    default:
      return state;
   }
}

export default commentReducer;
