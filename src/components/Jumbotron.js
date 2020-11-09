import { Component } from 'react'

class Jumbotron extends Component {
    render() {
        return(
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-3">Welcome To The Universe</h1>
                    <p>Display some longer sub text for more information to the user such as: I am creating this jumbotron to see if i can fix my verticle spacing issue.</p>
                    <p>
                        <div className="btn btn-primary btn-lg" role="button">Learn More</div>
                    </p>
                </div>
            </div>
        )
    }
}

export default Jumbotron