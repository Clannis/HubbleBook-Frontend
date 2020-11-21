import { Component } from 'react'
import { connect } from 'react-redux'
import fetchAllArticles from '../actions/fetchAllArticles'
import ArticleCard from '../components/ArticleCard'
import Loading from '../components/Loading'

class ArticleContainer extends Component {

    componentDidMount() {
        this.props.fetchAllArticles()
      }

    renderArticles = () => {
        if (this.props.articles && this.props.articles.length > 0) {
            return this.props.articles.map((article) => {
                return  <div className="col-md-4" key={article.news_id}>
                            <ArticleCard article={article}/>
                        </div>
            })
        }
    }

    render() {
        if (this.props.requesting) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-4 mx-auto">
                            <Loading/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="album py-2">
                    <div className="container">
                        <div className="row">
                            {this.renderArticles()}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

function mapDispatchToProps(dispatch){
    return { fetchAllArticles: () => dispatch(fetchAllArticles()) }
}

export default connect(null, mapDispatchToProps)(ArticleContainer)