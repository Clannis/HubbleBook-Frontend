import { Component } from 'react'
import ArticleCard from '../components/ArticleCard'

class SearchCategoryContainer extends Component {

    renderArticlesByTitle = () => {
        if (this.props.articles.title) {
            return this.props.articles.title.map((article) => <ArticleCard article={article} />)
        }
    }

    renderArticlesByContent = () => {
        if (this.props.articles.content) {
            return this.props.articles.content.map((article) => <ArticleCard article={article} />)
        }
    }

    render() {
        return(
            <div className="container-fluid h-75 d-flex flex-column">
                <div className="row flex-fill flex-grow-1 p-2 px-5">
                    <div className="col-4 mh-100">
                        <h3 className="text-center">Results by<br/>Title: {this.props.articles.title ? this.props.articles.title.length : 0}</h3>
                    </div>
                    <div className="col-4 mh-100">
                        <h3 className="text-center">Results by<br/>Content: {this.props.articles.content ? this.props.articles.content.length : 0}</h3>
                    </div>
                    <div className="col-4 mh-100">
                        <h3 className="text-center">Results by<br/>Users</h3>
                    </div>
                </div>
                <div className="row flex-fill flex-grow-1 px-5" style={{minHeight: 0}}>
                    <div className="col mh-100 py-4 shadow-lg m-4" style={{overflowY: "scroll"}}>
                        <div className="row justify-content-center">
                            {this.renderArticlesByTitle()}
                        </div>
                    </div>
                    <div className="col mh-100 py-4 shadow-lg m-4" style={{overflowY: "scroll"}}>
                        <div className="row justify-content-center">
                            {this.renderArticlesByContent()}
                        </div>
                    </div>
                    <div className="col mh-100 py-4 shadow-lg m-4" style={{overflowY: "scroll"}}>
                        <div className="row justify-content-center">
                            {this.renderArticlesByContent()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

  
export default SearchCategoryContainer