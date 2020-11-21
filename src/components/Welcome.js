import { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <header className="masthead mb-auto" >
                    <div className="inner">
                        <h3 className="masthead-brand">HubbleBook</h3>
                        <ul className="nav nav-pills justify-content-end pr-4">
                            <li className="btn nav-item nav-link active" href="#">Log In</li>
                            <li className="btn nav-item nav-link" href="#">Sign Up</li>
                            <li className="btn nav-item nav-link disabled" href="#">About</li>
                        </ul>
                    </div>
                </header>

                <main role="main" className="inner cover">
                    <h1 className="cover-heading">Cover your page.</h1>
                    <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                    <p className="lead">
                    <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
                    </p>
                </main>

            </div>
        )
    }
}

export default Welcome