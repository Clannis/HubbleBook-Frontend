import { Component } from 'react'
import { connect } from 'react-redux'
import addNewComment from '../actions/addNewComment'

class CommentForm extends Component {
    constructor() {
        super()
        this.state = {
            content: ""
        }
    }

    handleChange = (event) => {
        this.setState({ content: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = {content: event.target.content.value, article_id: this.props.activeArticle.news_id}
        this.props.addNewComment(data)
        this.setState({content: ""})
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Comment</label>
                        <textarea className="form-control" id="content" name="content" rows="3" onChange={this.handleChange} value={this.state.content}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Post</button>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeArticle: state.articles.activeArticle,
        error: state.error
    }
}

function mapDispatchToProps(dispatch){
    return { 
        addNewComment: (content) => dispatch(addNewComment(content))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)