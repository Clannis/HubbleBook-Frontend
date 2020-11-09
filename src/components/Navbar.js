import { Component } from 'react'

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className=" btn navbar-brand">HubbleBook</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <div className=" btn nav-link">Home</div>
                        </li>
                    </ul>
                    <form className="form-inline mt-2mt-md-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Navbar