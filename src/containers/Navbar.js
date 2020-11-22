import { Link } from 'react-router-dom'
import Search from '../components/Search'
import WelcomeNav from '../components/WelcomeNav'
import SignupNav from '../components/SignupNav'
import LoginNav from '../components/LoginNav'

const Navbar = (props) => {
    switch (props.loggedIn) {
        case true:
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
        case false:
             switch (props.page) {
                case "login":
                    return <LoginNav/>
                case "signup":
                    return <SignupNav/>
                case "welcome":
                    return <WelcomeNav/>
                default:
                    return <></>
            }
        default:
            return (
                <></>
            )
    }
}

export default Navbar