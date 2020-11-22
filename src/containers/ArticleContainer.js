import { Component } from 'react'
import { connect } from 'react-redux'
import fetchAllArticles from '../actions/fetchAllArticles'
import ArticleCard from '../components/ArticleCard'
import LoadingContainer from './LoadingContainer'

class ArticleContainer extends Component {

    componentDidMount() {
        this.props.fetchAllArticles()
      }

    renderArticles = () => {
        if (this.props.articles && this.props.articles.length > 0) {
            return this.props.articles.map((article) => {
                return  <div className="col-xl-3 col-lg-4 col-md-6" key={article.news_id}>
                            <ArticleCard article={article}/>
                        </div>
            })
        }
    }

    render() {
        if (this.props.requesting) {
            return (
                <LoadingContainer/>
            )
        } else {
            return(
                <div className="album py-5">
                    <div className="container-fluid mx-auto overflow-auto">
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