import { Component } from 'react'
import ArticleCard from '../components/ArticleCard'
import Loading from '../components/Loading'

class SearchCategoryContainer extends Component {

    renderArticlesByTitle = () => {
        if (this.props.search.title.length > 0) {
            return this.props.search.title.map((article) => <ArticleCard article={article} key={article.news_id}/>)
        } else {
            return <iframe src="https://giphy.com/embed/9SJazLPHLS8roFZMwZ" width="480" height="256" frameBorder="0"/>
        }
    }

    renderArticlesByContent = () => {
        if (this.props.search.content.length > 0) {
            return this.props.search.content.map((article) => <ArticleCard article={article} key={article.news_id}/>)
        } else {
            return <iframe src="https://giphy.com/embed/9SJazLPHLS8roFZMwZ" width="480" height="256" frameBorder="0"/>
        }
    }

    render() {
        if (this.props.requesting) {
            return(
                <div className="container-fluid h-75 d-flex flex-column">
                    <div className="row flex-fill flex-grow-1 p-2 px-5">
                        <div className="col-4 mh-100">
                            <h3 className="text-center">Results by<br/>Title: {this.props.search.title ? this.props.search.title.length : 0}</h3>
                        </div>
                        <div className="col-4 mh-100">
                            <h3 className="text-center">Results by<br/>Content: {this.props.search.content ? this.props.search.content.length : 0}</h3>
                        </div>
                        <div className="col-4 mh-100">
                            <h3 className="text-center">Results by<br/>Users</h3>
                        </div>
                    </div>
                    <div className="row flex-fill flex-grow-1 px-5" style={{minHeight: 0}}>
                        <div className="col mh-100 py-4 shadow-lg m-4" style={{overflowY: "scroll"}}>
                            <div className="row justify-content-center">
                                <Loading/>
                            </div>
                        </div>
                        <div className="col mh-100 py-4 shadow-lg m-4" style={{overflowY: "scroll"}}>
                            <div className="row justify-content-center">
                                <Loading/>
                            </div>
                        </div>
                        <div className="col mh-100 py-4 shadow-lg m-4" style={{overflowY: "scroll"}}>
                            <div className="row justify-content-center">
                                <Loading/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="container-fluid h-100 d-flex flex-column pt-4">
                    <div className="row p-2 px-5">
                        <div className="col-4 ">
                            <h3 className="text-center">Results by<br/>Title: {this.props.search.title ? this.props.search.title.length : 0}</h3>
                        </div>
                        <div className="col-4 ">
                            <h3 className="text-center">Results by<br/>Content: {this.props.search.content ? this.props.search.content.length : 0}</h3>
                        </div>
                        <div className="col-4 ">
                            <h3 className="text-center">Results by<br/>Users</h3>
                        </div>
                    </div>
                    <div className="row flex-fill flex-grow-1 px-5 pb-10" style={{minHeight: 0, maxHeight: "70vh"}}>
                        <div className="col mh-100 m-4 overflow-auto" style={{overflowY: "scroll"}}>
                            <div className="row justify-content-center">
                                {this.renderArticlesByTitle()}
                            </div>
                        </div>
                        <div className="col mh-100 m-4 overflow-auto" style={{overflowY: "scroll"}}>
                            <div className="row justify-content-center">
                                {this.renderArticlesByContent()}
                            </div>
                        </div>
                        <div className="col mh-100 m-4 overflow-auto" style={{overflowY: "scroll"}}>
                            <div className="row justify-content-center">
                                {this.renderArticlesByContent()}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

  
export default SearchCategoryContainer