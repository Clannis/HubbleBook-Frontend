import { Component } from 'react'
import { connect } from 'react-redux'
import addModalContent from '../actions/addModalContent'
import deleteComment from '../actions/deleteComment'

class Comment extends Component {

    passToModal = () => {
        this.props.addModalContent({ content: this.props.comment.content, commentId: this.props.comment.id })
    }

    handleDelete = () => {
        this.props.deleteComment(this.props.comment.id)
    }

    renderDropdown = () => {
        if (this.props.comment.user.username === this.props.user.username ) {
            return (
                <>
                    <strong className="d-block btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                    </strong>
                    <div className="dropdown-menu">
                        <div className="dropdown-item">
                            <div className="d-flex justify-content-between" data-toggle="modal" onClick={this.passToModal} data-target="#exampleModal">
                                <p className="d-block">
                                    Edit
                                </p>
                                <p className="d-block">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div className="dropdown-item text-danger" onClick={this.handleDelete}>
                            <div className="d-flex justify-content-between">
                                <p className="d-block">
                                    Delete
                                </p>
                                <p className="d-block">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M3.18 4l1.528 9.164a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836L12.82 4H3.18zm.541 9.329A2 2 0 0 0 5.694 15h4.612a2 2 0 0 0 1.973-1.671L14 3H2l1.721 10.329z"/>
                                        <path d="M14 3c0 1.105-2.686 2-6 2s-6-.895-6-2 2.686-2 6-2 6 .895 6 2z"/>
                                        <path fillRule="evenodd" d="M12.9 3c-.18-.14-.497-.307-.974-.466C10.967 2.214 9.58 2 8 2s-2.968.215-3.926.534c-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466zM8 5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2z"/>
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    render() {
        return (
            <>
                <div className="media text-muted pt-3">
                    <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                    <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <div className="d-flex justify-content-between">
                            <strong className="d-block text-gray-dark">{this.props.comment.user.username}</strong>
                            <div className="btn-group dropleft">
                                {this.renderDropdown()}
                            </div>
                        </div>
                        {this.props.comment.content}
                    </div>
                </div>
            </>
        )
    }
}

function mapStateToProps(state){
    return { user: state.user.user }
}

function mapDispatchToProps(dispatch){
    return { 
        addModalContent: (content) => dispatch(addModalContent(content)),
        deleteComment: (id) => dispatch(deleteComment(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
