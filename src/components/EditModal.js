import { Component } from 'react'

class EditModal extends Component {
    constructor(props) {
        super()
        this.state = {
            content: props.content
        }
    }

    componentDidUpdate() {
        if (this.state.content !== this.props.content) {
            this.setState({content: this.props.content})
        }   
    }

    handleChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    render() {
        return (
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Comment</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div className="input-group" id="show_hide_password">
                                <input type="text" id="content" name="content" className="form-control" required="" value={this.state.content} onChange={this.handleChange}/>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditModal