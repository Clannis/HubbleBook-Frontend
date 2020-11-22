import { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../containers/Navbar'

class Welcome extends Component {
    render() {
        return (
            <>
                <Navbar page={"welcome"} loggedIn={false} />

                <div class="position-relative overflow-hidden text-center bg-dark text-white">
                    <div class="col-sm-8 col-md-6 col-lg-6 mx-auto my-5">
                        <h1 class="display-4 font-weight-normal">Welcome to the Universe</h1>
                        <p class="lead font-weight-normal">
                            {/* As it stands now, this application has been generated for the purposes of having a home base for all Hubble Telescope related articles published by NASA. */}
                            Stay informed about the most beloved telescope in all of human history. Talk about new discoveries, projects, and any needed repairs. Meet new people and make new friends that share your super awesome scientific and discovery interests.
                        </p>
                        <Link to={"/about"} ><div class="btn btn-outline-secondary">Learn More</div></Link>
                    </div>
                    <div class="product-device box-shadow d-none d-md-block"></div>
                    <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
                </div>

                <div class="container-fluid">
                    <div className="row">
                        <div class="col-lg-3 col-md-6 bg-dark text-center text-white">
                            <div class="my-3 py-3">
                                <h2 class="display-5">Another headline</h2>
                                <p class="lead">And an even wittier subheading.</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 bg-light text-center">
                            <div class="my-3 p-3">
                                <h2 class="display-5">Another headline</h2>
                                <p class="lead">And an even wittier subheading.</p>
                            </div>
                        </div>
                    
                        <div class="col-lg-3 col-md-6 bg-light text-center">
                            <div class="my-3 p-3">
                                <h2 class="display-5">Another headline</h2>
                                <p class="lead">And an even wittier subheading.</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 bg-primary text-center text-white">
                            <div class="my-3 py-3">
                                <h2 class="display-5">Another headline</h2>
                                <p class="lead">And an even wittier subheading.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <footer class="container py-5">
                    <div class="row">
                        <div class="col-12 col-md">
                            <img src="https://static.thenounproject.com/png/331709-200.png" alt="icon" height="50px" width="50px" />
                            <small class="d-block mb-3 text-muted">2020</small>
                        </div>
                        <div class="col-6 col-md">
                            <h5>Features</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="text-muted" href="#">Cool stuff</a></li>
                                <li><a class="text-muted" href="#">Random feature</a></li>
                                <li><a class="text-muted" href="#">Team feature</a></li>
                                <li><a class="text-muted" href="#">Stuff for developers</a></li>
                                <li><a class="text-muted" href="#">Another one</a></li>
                                <li><a class="text-muted" href="#">Last time</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-md">
                            <h5>Resources</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="text-muted" href="#">Resource</a></li>
                                <li><a class="text-muted" href="#">Resource name</a></li>
                                <li><a class="text-muted" href="#">Another resource</a></li>
                                <li><a class="text-muted" href="#">Final resource</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-md">
                            <h5>Resources</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="text-muted" href="#">Business</a></li>
                                <li><a class="text-muted" href="#">Education</a></li>
                                <li><a class="text-muted" href="#">Government</a></li>
                                <li><a class="text-muted" href="#">Gaming</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-md">
                        <h5>About</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="text-muted" href="#">Team</a></li>
                                <li><a class="text-muted" href="#">Telescopes</a></li>
                                <li><a class="text-muted" href="#">Privacy</a></li>
                                <li><a class="text-muted" href="#">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Welcome