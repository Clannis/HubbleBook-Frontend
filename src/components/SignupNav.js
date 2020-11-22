import { Link } from "react-router-dom"

const SignupNav = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
            <Link to={'/articles'}><div className=" btn navbar-brand">HubbleBook</div></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/"} ><div class="btn nav-link">Welcome</div></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/Login"} ><div class="btn nav-link">Log In</div></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default SignupNav