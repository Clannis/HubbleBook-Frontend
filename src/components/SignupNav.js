import { Link } from "react-router-dom"

const SignupNav = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
            <Link to={'/'}><div className=" btn navbar-brand"><img src="https://static.thenounproject.com/png/331709-200.png" alt="icon" height="30px" width="30px" />HubbleBook</div></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/Login"} ><div className="btn nav-link">Log In</div></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default SignupNav