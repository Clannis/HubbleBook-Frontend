import { Link } from 'react-router-dom'
import Search from './Search'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <Link to={'/articles'}><div className=" btn navbar-brand">HubbleBook</div></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={'/articles'}><div className=" btn nav-link active">Home</div></Link>
                    </li>
                    <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Missions</div>
                        <div className="dropdown-menu" aria-labelledby="dropdown03">
                            <Link to={'/missions/hubble'}><div className="dropdown-item">Hubble</div></Link>
                            <Link to={'/missions/james_webb'}><div className="dropdown-item">James Webb</div></Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to={'/about'}><div className=" btn nav-link">About</div></Link>
                    </li>
                    <li>
                        <div className=" btn nav-link">Logout</div>
                    </li>
                </ul>
                <Search/>
            </div>
        </nav>
    )
}

export default Navbar