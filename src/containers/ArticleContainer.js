import { Component } from 'react'
import Article from '../components/Article'

class ArticleContainer extends Component {

    renderArticles = () => {
        return this.props.articles.map((article) => <Article article={article} />)
    }

    render() {
        return(
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {this.renderArticles()}
                    </div>
                </div>
            </div>
        )
    }
}
  
  export default ArticleContainer