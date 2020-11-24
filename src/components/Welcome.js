import { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../containers/Navbar'

class Welcome extends Component {
    render() {
        return (
            <>
                <section id="welcome">
                    <div className="position-relative overflow-hidden text-center bg-dark text-white" style={{backgroundImage: "url(https://scitechdaily.com/images/Carina-Nebula-2-scaled.jpg)"}}>
                        <div className="col-sm-8 col-md-6 col-lg-6 mx-auto my-5">
                            <h1 className="display-4 font-weight-normal">Welcome to the Universe</h1>
                            <p className="lead font-weight-normal">
                                Stay informed about the most beloved telescope in all of human history. Talk about new discoveries, projects, and any needed repairs. Meet new people and make new friends that share your super awesome scientific and discovery interests.
                            </p>
                            <Link to={"/about"} ><div className="btn btn-primary">Learn More</div></Link>
                        </div>
                        <div className="product-device box-shadow d-none d-md-block"></div>
                        <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
                    </div>
                </section>

                <section id="services">
                    <div class="container py-2">
                        <div class="row">
                            <div class="col-lg-12 text-center">
                                <h2 class="section-heading">Everything You Need</h2>
                                <hr class="primary"/>
                            </div>
                        </div>
                    </div>
                    <div class="container text-muted">
                        <div class="row">
                            <div class="col-md-4 text-center">
                                <div class="service-box">
                                    <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-justify-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                    <h3>Talk With Friends</h3>
                                    <p class="text-muted">Converse with others about the findings in deep space. Let everyone know your reaction.</p>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <div class="service-box">
                                    <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-book" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                                    </svg>
                                    <h3>Stay Informed</h3>
                                    <p class="text-muted">Learn all there is to know about interstellar discoveries.</p>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <div class="service-box">
                                    <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-calendar-event" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                    </svg>
                                    <h3>Stay Up To Date</h3>
                                    <p class="text-muted">Always stay on the cutting edge of the last frontier.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="telescopes">
                    <div className="container-fluid p-0">
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row flex-nowrap py-2 bg-light align-items-center" style={{maxHeight: "550px"}}>
                                <div className="col-lg-7 col-md-6" style={{maxHeight: "250px"}}>
                                    <h3 className="display-5 font-weight-normal text-left">Hubble Space Telescope</h3>
                                    <p className="lead font-weight-normal text-muted text-left" style={{overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", "-webkit-line-clamp": "4", "-webkit-box-orient": "vertical"}}>
                                        Stay informed about the most beloved telescope in all of human history. Talk about new discoveries, projects, and any needed repairs. Meet new people and make new friends that share your super awesome scientific and discovery interests.
                                    </p>
                                </div>
                                <div className="col-lg-5 col-md-6 mx-auto" >
                                    <img className="img-fluid" src="https://www.seti.org/sites/default/files/styles/original/public/2020-04/Hubble-and-limb-of-Earth-GSS-4_25_2020_1400px.jpg" alt="hubble-over-sky" style={{objectFit: "cover"}} />
                                </div>
                            </div>

                            <div className="d-flex flex-row flex-nowrap py-2 bg-dark align-items-center" style={{maxHeight: "550px"}}>
                                <div className="col-lg-5 col-md-6 mx-auto" >
                                    <img className="img-fluid" src="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/gallery-webb-telescope_0.jpg" alt="hubble-over-sky" style={{objectFit: "cover"}} />
                                </div>
                                <div className="col-lg-7 col-md-6 text-white" >
                                    <h3 className="display-5 font-weight-normal text-right">James Webb Telescope</h3>
                                    <p className="tail font-weight-normal text-muted text-right" style={{overflowY: "scroll", display: "-webkit-box", "-webkit-line-clamp": "5", "-webkit-box-orient": "vertical"}}>
                                        The James Webb Space Telescope (sometimes called JWST or Webb) is an orbiting infrared observatory that will complement and extend the discoveries of the Hubble Space Telescope, with longer wavelength coverage and greatly improved sensitivity. The longer wavelengths enable Webb to look much closer to the beginning of time and to hunt for the unobserved formation of the first galaxies, as well as to look inside dust clouds where stars and planetary systems are forming today.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="container py-5">
                    <div className="row">
                        <div className="col-12 col-md">
                            <img src="https://static.thenounproject.com/png/331709-200.png" alt="icon" height="50px" width="50px" />
                            <small className="d-block mb-3 text-muted">2020</small>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Features</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Cool stuff</a></li>
                                <li><a className="text-muted" href="#">Random feature</a></li>
                                <li><a className="text-muted" href="#">Team feature</a></li>
                                <li><a className="text-muted" href="#">Stuff for developers</a></li>
                                <li><a className="text-muted" href="#">Another one</a></li>
                                <li><a className="text-muted" href="#">Last time</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Resource</a></li>
                                <li><a className="text-muted" href="#">Resource name</a></li>
                                <li><a className="text-muted" href="#">Another resource</a></li>
                                <li><a className="text-muted" href="#">Final resource</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Business</a></li>
                                <li><a className="text-muted" href="#">Education</a></li>
                                <li><a className="text-muted" href="#">Government</a></li>
                                <li><a className="text-muted" href="#">Gaming</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                        <h5>About</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Team</a></li>
                                <li><a className="text-muted" href="#">Telescopes</a></li>
                                <li><a className="text-muted" href="#">Privacy</a></li>
                                <li><a className="text-muted" href="#">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Welcome