import { Component } from 'react'

class Jumbotron extends Component {
    render() {
        return(
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-3">{this.props.header}</h1>
                    <p>{this.props.body}</p>
                    <a href={this.props.href} className="btn btn-primary btn-lg" role="button">Learn More</a>
                </div>
            </div>
        )
    }
}

export default Jumbotron