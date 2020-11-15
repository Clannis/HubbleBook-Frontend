import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <Link to={'/articles'}><div className=" btn navbar-brand">HubbleBook</div></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to={'/articles'}><div className=" btn nav-link">Home</div></Link>
                    </li>
                    <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Missions</div>
                        <div className="dropdown-menu" aria-labelledby="dropdown03">
                            <Link to={'/missions/hubble'}><div className="dropdown-item">Hubble</div></Link>
                            <Link to={'/missions/james_webb'}><div className="dropdown-item">James Webb</div></Link>
                        </div>
                    </li>
                    <li className="nav-item active">
                        <Link to={'/about'}><div className=" btn nav-link">About</div></Link>
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

export default Navbar