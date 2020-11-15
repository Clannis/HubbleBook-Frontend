import { Component } from 'react'
import { connect } from 'react-redux'
import Jumbotron from './Jumbotron'
import fetchArticle from '../actions/fetchArticle'

class ActiveArticle extends Component {

    componentDidMount() {
        this.props.fetchArticle(this.props.match.params.article_id)
    }

    render() {

        let article = this.props.activeArticle

        return(
            <div className="container">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <img src={article.keystone_image_1x} alt={article.news_id}/>
                    </div>
                </div>
                <Jumbotron header={article.name} body={article.abstract} href={article.url} target="_blank"/>
                <div className="my-3 p-3 bg-white rounded shadow-sm">
                    <h6 className="border-bottom border-gray pb-2 mb-0">Comments</h6>
                    <div className="media text-muted pt-3">
                        <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                        <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <strong className="d-block text-gray-dark">@username</strong>
                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                        </p>
                    </div>
                    <div className="media text-muted pt-3">
                        <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
                        <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <strong className="d-block text-gray-dark">@username</strong>
                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                        </p>
                    </div>
                    <div className="media text-muted pt-3">
                        <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"></rect><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
                        <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <strong className="d-block text-gray-dark">@username</strong>
                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                        </p>
                    </div>
                    <form>
                        <div className="form-group">
                            <label>Add Comment</label>
                            <textarea className="form-control" id="content" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeArticle: state.activeArticle
    }
}

function mapDispatchToProps(dispatch){
    return { fetchArticle: (article_id) => dispatch(fetchArticle(article_id)) }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ActiveArticle)