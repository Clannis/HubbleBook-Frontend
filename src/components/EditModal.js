import { Component, createRef } from 'react'
import { connect } from 'react-redux'
import clearModalContent from '../actions/clearModalContent'
import addModalContent from '../actions/addModalContent'
import updateCommentContent from '../actions/updateCommentContent'


class EditModal extends Component {
    constructor() {
        super()
        
        this.formContent = createRef()  
    }

    componentDidMount() {
         
    }

    handleChange = (event) => {
        this.props.addModalContent({ content: event.target.value, commentId: this.props.commentId })
        
    }

    handleSubmit = () => {
        console.log(this.props.content)
        let data = { content: this.props.content, commentId: this.props.commentId }
        this.props.updateCommentContent(data)
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Comment</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.props.clearModalContent()}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form>
                            <div className="modal-body">
                                
                                    <div className="input-group" id="show_hide_password">
                                        <input ref={this.formContent} type="text" id="content" name="content" className="form-control" required="" value={this.props.content} onChange={this.handleChange}/>
                                    </div>
                                
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => this.props.clearModalContent()}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        content: state.modal.content,
        commentId: state.modal.commentId,
        error: state.error
    }
}

function mapDispatchToProps(dispatch){
    return { 
        clearModalContent: () => dispatch(clearModalContent()),
        addModalContent: (content) => dispatch(addModalContent(content)),
        updateCommentContent: (content) => dispatch(updateCommentContent(content))
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal)