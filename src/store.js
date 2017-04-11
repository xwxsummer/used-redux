import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';


let comments = {
  1: [],
  2: []
  // 必须设置初始值，不然会报错的
}

const posts = [
  {
    id: 1,
    title: 'redux-hello',
    likes: 3
  },
  {
    id: 2,
    title: 'redux-baby',
    likes: 6
  }
]

const defaultState = {
  posts,
  comments
}

const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunk)));

export default store;
