import { Component } from 'react'

class Comment extends Component {
    render() {
        return (
            <>
                <div className="media text-muted pt-3">
                    <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <div className="d-flex justify-content-between">
                            <strong className="d-block text-gray-dark">{this.props.comment.user.username}</strong>
                            <div className="btn-group dropleft">
                                <strong className="d-block btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                    </svg>
                                </strong>
                                <div class="dropdown-menu">
                                    <div class="dropdown-item">Edit</div>
                                    <div class="dropdown-item text-danger">Delete</div>
                                </div>
                            </div>
                        </div>
                        {this.props.comment.content}
                    </p>
                </div>
            </>
        )
    }
}

export default Comment
