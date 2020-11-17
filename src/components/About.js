const About = () => {
    return(
        <div className="container">
            <div className="row my-3 pg-3 rouded shadow-lg bg-light">
                <div className="col-lg-8 mx-auto text-center">
                    <img src={process.env.PUBLIC_URL + '/james_dodds.jpeg'} className="bd-placeholder-img rounded-circle" width="140" height="140" alt="James Dodds"/>
                    <h2>James Dodds</h2>
                    <h4>(Creator)</h4>
                    <p>Prospective Software Engineer curently working as a Water Treatment Operator.</p>
                    <p><strong>Education includes:</strong></p>
                    <ul className="list-unstyled rounded shadow-lg">
                        <li>Flatiron School (obviously)</li>
                        <li>Bachelor of Science - Texas State University - San Marcos
                            <li>Major - Anthropology</li>
                            <li>Minor - Geography (focus on GIS)</li>
                        </li>
                    </ul>
                    <p><strong>Previous Experience includes:</strong></p>
                    <ul className="list-unstyled rounded shadow-lg">
                        <li>Project Manager</li>
                        <li>GIS Technician</li>
                        <li>Reservoir Caretaker</li>
                        <li>Distribution/Collection Operator</li>
                        <li>Heavy Equipment Operator</li>
                    </ul>
                    <p><a class="btn btn-secondary" href="https://github.com/Clannis" role="button">View GitHub Profile »</a></p>
                </div>
            </div>
            <div className="row my-3 pg-3 rouded shadow-lg bg-light">
                <div className="col-lg-8 mx-auto text-center">
                    <p>This web app was created for my final portfolio project as part of the Flatiron School Part-Time Online Software Engineering Curriculum.</p>
                    <p>All data contained herein comes from <a href="http://hubblesite.org" target="_blank">hubblesite.org</a>'s API <a href="http://hubblesite.org/api/documentation" target="blank">here</a>. Each article provided contains an abstract of the article, a picture, and a url to the full article hosted by hubblesite.org. Any missing information is only reflected by the information missing from the source API.</p>
                    <p>This site allows for comments to be made about each article to allow for conversations to take place regarding content. Any and all outside discussions are strongly advised against.</p>
                </div>
            </div>
        </div>
    )
}

export default About