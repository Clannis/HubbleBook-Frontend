import { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'


class ArticleCard extends Component {

    renderCard = () => {
        return(
            <div className="card mb-4 shadow-sm" style={{width: "18rem"}} key={this.props.article.news_id}>
                <Link key={this.props.article.news_id} to={`/articles/${this.props.article.news_id}`}>
                    <img src={this.props.article.thumbnail} className="card-img-top" alt="..."/>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{this.props.article.name}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link key={this.props.article.news_id} to={`/articles/${this.props.article.news_id}`}>
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            </Link>
                        </div>
                        <small className="text-muted">{moment(this.props.article.publication).fromNow()}</small>
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

export default ArticleCard