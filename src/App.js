import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import fetchAllArticles from './actions/fetchAllArticles'
import ArticlesContainer from './containers/ArticleContainer'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import { Route } from 'react-router-dom'
import ActiveArticle from './components/ActiveArticle'
import Login from './components/Login'


class App extends Component {

  componentDidMount() {
    this.props.fetchAllArticles()
  }

  render() {
    return (
      <Fragment>
        <Route exact path="/" render={() => <Login/> } />
        <Route exact path="/articles" render={() => {
          return(
            <Fragment>
              <Navbar />
              <main role="main">
                <Jumbotron header={"Welcome To The Universe"} body={"Display some longer subtext for more information to the user such as: I am creating this jumbotron to see if i can fix my verticle spacing issue."}/>
                <ArticlesContainer articles={this.props.articles} />
              </main>
            </Fragment>
          )
        }}/> 
        <Route path={'/articles/:article_id'} render={(routerProps) => {
          return(
            <Fragment>
              <Navbar />
              <ActiveArticle {...routerProps} />
            </Fragment>
          )
        }} />
      </Fragment>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { fetchAllArticles: () => dispatch(fetchAllArticles()) }
}

const mapStateToProps = (state) => {
  return {articles: state.articles, requesting: state.requesting}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
