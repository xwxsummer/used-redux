import axios from 'axios';

export function _addComment(data) {
  return {
    type: 'ADD_COMMENT',
    comment: data.commentBody,
    postId: data.postId
  };
}

export function addComment(data) {
  return dispatch => {
      axios.post('http://redux-hello.haoduoshipin.com/comment', data).then(
        dispatch(_addComment(data))
      )
  }
}

function transData(array) {
  let post1Com  = array.filter(value => value.postId != '2' ).map(item => {
    return item.commentBody;
  })

  let post2Com = array.filter(value => value.postId != '1' ).map(item => {
    return item.commentBody;
  });
  return {
    1: post1Com,
    2: post2Com
  }
}

export function fetchComments() {
  return dispatch => {
      axios.get('http://redux-hello.haoduoshipin.com/comments').then( response => {
          console.log('fetchComments', transData(response.data.comments));
          dispatch({ type: 'LOAD_COMMENTS', comments: transData(response.data.comments) })
          // {"msg":"获取分类成功","comments":[{"_id":"58d88a4d6281635fbed182bd","postId":"1","commentBody":"hello1","__v":0},{"_id":"58d88b8b17deb3614c29065f","postId":"2","commentBody":"hello2","__v":0},{"_id":"58d8bf1317deb3614c290660","postId":"2","commentBody":"hello3","__v":0},{"_id":"58d8c09217deb3614c290661","commentBody":"xxx","postId":"1","__v":0}]}%
        }
      )
  }
}
