import { Component } from 'react'
import { connect } from 'react-redux'
import ArticlesContainer from './containers/ArticleContainer'
import Navbar from './containers/Navbar'
import { Route } from 'react-router-dom'
import ActiveArticle from './components/ActiveArticle'
import Login from './components/Login'
import Footer from './components/Footer'
import MissionContainer from './containers/MissionContainer'
import About from './components/About'
import SearchCategoryContainer from './containers/SearchCategoryContainer'
import Welcome from './components/Welcome'
import Signup from './components/Signup'


class App extends Component {

  

  render() {
    return (
      <>
        <Route exact path="/" render={() => <Welcome/> } />
        <Route path="/Login" render={() => <Login/> } />
        <Route path="/Signup" render={() => <Signup/> } />
        <Route exact path="/articles" render={() => {
          return(
            <>
              <Navbar loggedIn={true}/>
              <main role="main">
                <ArticlesContainer articles={this.props.articles} requesting={this.props.requesting}/>
              </main>
            </>
          )
        }}/> 
        <Route exact path={'/search'} render={() => {
          return(
            <>
              <Navbar loggedIn={true}/>
              <SearchCategoryContainer search={this.props.search} requesting={this.props.requesting}/>
            </>
          )
        }} />
        <Route path={'/articles/:article_id'} render={(routerProps) => {
          return(
            <>
              <Navbar loggedIn={true}/>
              <ActiveArticle {...routerProps} activeArticle={this.props.activeArticle} requesting={this.props.requesting}/>
            </>
          )
        }} />
        <Route path={'/missions/:mission_name'} render={(routerProps) => {
          return(
            <>
              <Navbar loggedIn={true}/>
              <MissionContainer {...routerProps} articles={this.props.articles} requesting={this.props.requesting}/>
            </>
          )
        }} />
        <Route path={'/about'} render={() => {
          return(
            <>
              <Navbar loggedIn={true}/>
              <About />
            </>
          )
        }} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles.articles, 
    requesting: state.requesting, 
    activeArticle: state.articles.activeArticle,
    error: state.error,
    search: state.search
  }
}

export default connect(mapStateToProps)(App);
