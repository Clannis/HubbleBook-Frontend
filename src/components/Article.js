import { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'


class Article extends Component {

    renderCard = () => {
        return(
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm" style={{width: "18rem"}}>
                    <img src={this.props.article.thumbnail} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.article.name}</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <Link key={this.props.article.news_id} to={`/${this.props.article.news_id}`}>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                </Link>
                            </div>
                            <small className="text-muted">[Time Here]</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return(
            <Fragment >
                {this.renderCard()}
            </Fragment>
        )
    }
}

export default Article