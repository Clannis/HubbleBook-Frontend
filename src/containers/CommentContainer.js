import { Component } from 'react'
import CommentForm from '../components/CommentForm'
import { connect } from 'react-redux'
import fetchArticleComments from '../actions/fetchArticleComments'
import addNewComment from '../actions/addNewComment'
import Comment from '../components/Comment'
import EditModal from '../components/EditModal'


class CommentContainer extends Component {
    constructor(){
        super()
        this.state = {
            modalContent: ""
        }
    }

    renderComments = () => {
        return this.props.comments.map(comment => <Comment comment={comment} key={comment.id} setModalContent={this.setModalContent}/>)
    }

    setModalContent = (content) => {
        this.setState({
            modalContent: content
        })
    }

    render() {
        return (
            <>
                <EditModal content={this.state.modalContent}/>
                <div className="row">
                    <div className="col my-3 p-3 bg-white">
                        <h6 className="border-bottom border-gray pb-2 mb-0">Comments</h6>
                        
                        {this.renderComments()}
                        
                        <CommentForm />
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments.comments
    }
}

function mapDispatchToProps(dispatch){
    return { 
        fetchArticleComments: (articleId) => dispatch( fetchArticleComments (articleId)),
        addNewComment: (content) => dispatch(addNewComment(content))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)