import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/commentActions';
import { fetchComments } from '../actions/commentActions';

class CommentBox extends Component {
  handleSubmit(e){
    e.preventDefault();
    // store.dispatch({type: 'ADD_COMMENT', comment: this.refs.comment.value, postId: this.props.postId});
    let data = {
      commentBody: this.refs.comment.value,
      postId: this.props.postId
    }
    this.props.addComment(data)
    this.refs.commentForm.reset();
  }
  componentWillMount(){
    this.props.fetchComments();
  }
  render(){
    let commentList = this.props.comments[this.props.postId].map((item, i) => {
      console.log(item);
      return(
        <div className="comment" key={i}>
          { item }
        </div>
      )
    })
    return(
      <div className="comment-box">
        { commentList }
        <form ref="commentForm" onSubmit={this.handleSubmit.bind(this)} className="comment-form">
          <input type="text" ref="comment" className="input"/>
          <input type="submit" className="submit-btn"/>
        </form>
        <div className="underline"></div>
      </div>
    )
  }
}


CommentBox.propTypes = {
  addComment: React.PropTypes.func.isRequired,
  fetchComments: React.PropTypes.func.isRequired,
  comments: React.PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  comments: state.comments
});

export default connect(mapStateToProps, { addComment, fetchComments } )(CommentBox);
