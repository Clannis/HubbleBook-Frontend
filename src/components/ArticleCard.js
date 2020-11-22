import { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { connect } from 'react-redux'
import fetchArticle from '../actions/fetchArticle'


class ArticleCard extends Component {

    handleClick = () => {
        this.props.fetchArticle(this.props.article.news_id)
    }

    renderCard = () => {
        return(
            <div className="card mb-4 shadow-sm mx-auto" style={{width: "18rem"}} key={this.props.article.news_id}>
                <Link key={this.props.article.news_id} to={`/articles/${this.props.article.news_id}`}>
                    <img src={this.props.article.thumbnail} onClick={this.handleClick} className="card-img-top img-fluid" alt="..."/>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{this.props.article.name}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link key={this.props.article.news_id} to={`/articles/${this.props.article.news_id}`}>
                                <button type="button" onClick={this.handleClick} className="btn btn-sm btn-outline-secondary">View</button>
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
            <>
                {this.renderCard()}
            </>
        )
    }
}

function mapDispatchToProps(dispatch){
    return { fetchArticle: (id) => dispatch(fetchArticle(id)) }
}

export default connect(null,mapDispatchToProps)(ArticleCard)