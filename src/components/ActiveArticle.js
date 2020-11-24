import { Component } from 'react'
import { connect } from 'react-redux'
import fetchArticle from '../actions/fetchArticle'
import fetchArticleComments from '../actions/fetchArticleComments'
import CommentContainer from '../containers/CommentContainer'
import LoadingContainer from '../containers/LoadingContainer'

class ActiveArticle extends Component {
    

    componentDidMount() {
        this.props.fetchArticle(this.props.match.params.article_id)
        this.props.fetchArticleComments(this.props.match.params.article_id)
    }

    render() {

        let article = this.props.activeArticle

        if (this.props.requesting) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-4 mx-auto">
                            <LoadingContainer/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <>
                    <div className="carousel slide" id="myCarousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={article.keystone_image_1x} alt={article.news_id} preserveAspectRatio="xMidYMid slice" style={{width: "100%", height: "100%"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        
                        <div className="row text-center bg-light">
                            <div className="col my-5">
                                <h1 className="display-6 font-weight-normal">{article.name}</h1>
                                <p className="lead font-weight-normal">{article.abstract}</p>
                                <a className="btn btn-primary" href={article.url} target="_blank" rel="noreferrer">Read Full Article</a>
                            </div>
                        </div>

                        <CommentContainer />

                    </div>
                </>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        activeArticle: state.articles.activeArticle,
        error: state.error
    }
}

function mapDispatchToProps(dispatch){
    return { 
        fetchArticle: (article_id) => dispatch(fetchArticle(article_id)),
        fetchArticleComments: (articleId) => dispatch(fetchArticleComments(articleId))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ActiveArticle)