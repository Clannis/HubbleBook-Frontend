import { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import fetchAllArticles from './actions/fetchAllArticles'
import ArticlesContainer from './containers/ArticleContainer'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import { Route } from 'react-router-dom'
import ActiveArticle from './components/ActiveArticle'
import Login from './components/Login'
import Loading from './components/Loading'
import Footer from './components/Footer'


class App extends Component {

  componentDidMount() {
    this.props.fetchAllArticles()
  }

  render() {
    return (
      <Fragment>
        <Loading requesting={this.props.requesting} />
        <Route exact path="/" render={() => <Login/> } />
        <Route exact path="/articles" render={() => {
          return(
            <Fragment>
              <Navbar />
              <main role="main">
                <Jumbotron header={"Welcome To The Universe"} body={"As it stands now, this application has been generated for the purposes of having a home base for all Hubble Telescope related articles published by NASA."}/>
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
        <Footer />
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
