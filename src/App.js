import { Component } from 'react'
import { connect } from 'react-redux'
import ArticlesContainer from './containers/ArticleContainer'
import Navbar from './containers/Navbar'
import { Route, Redirect } from 'react-router-dom'
import ActiveArticle from './components/ActiveArticle'
import Login from './components/Login'
import Footer from './components/Footer'
import MissionContainer from './containers/MissionContainer'
import About from './components/About'
import SearchCategoryContainer from './containers/SearchCategoryContainer'
import Welcome from './components/Welcome'
import Signup from './components/Signup'


class App extends Component {

  loggedIn = () => {
    if (localStorage.token || sessionStorage.token) {
      return true
    } 
    return false
  }

  render() {
    return (
      <>
        <Route exact path="/" render={(routerProps) => <><Navbar {...routerProps} loggedIn={this.loggedIn} /><Welcome/></> } />

        <Route path="/Login" render={(routerProps) => {
          return this.loggedIn() ? <Redirect to="/articles" /> : <><Navbar {...routerProps} loggedIn={this.loggedIn} /><Login /></>
        }} />

        <Route path="/Signup" render={(routerProps) => {
          return this.loggedIn() ? <Redirect to="/articles" /> : <><Navbar {...routerProps} loggedIn={this.loggedIn} /><Signup /></>
        }} />

        <Route exact path="/articles" render={ (routerProps) => {
          return this.loggedIn() ? 
          (<>
            <Navbar {...routerProps} loggedIn={this.loggedIn}/>
            <ArticlesContainer articles={this.props.articles} requesting={this.props.requesting}/>
          </> )
        : 
         <Redirect to="/" />
        }}/>

        <Route exact path={'/search'} render={ (routerProps) => {
          return this.loggedIn() ? 
          <>
            <Navbar {...routerProps} loggedIn={this.loggedIn}/>
            <SearchCategoryContainer search={this.props.search} requesting={this.props.requesting}/>
          </>
        : 
         <Redirect to="/" />
        }} />

        <Route path={'/articles/:article_id'} render={(routerProps) => {
          return this.loggedIn() ? 
            <>
              <Navbar {...routerProps} loggedIn={this.loggedIn}/>
              <ActiveArticle {...routerProps} activeArticle={this.props.activeArticle} requesting={this.props.requesting}/>
            </>
            : 
            <Redirect to="/" />
        }} />
        
        <Route path={'/missions/:mission_name'} render={(routerProps) => {
          return this.loggedIn() ? 
            <>
              <Navbar {...routerProps} loggedIn={this.loggedIn}/>
              <MissionContainer {...routerProps} articles={this.props.articles} requesting={this.props.requesting}/>
            </>
            : 
            <Redirect to="/" />
        }} />
        <Route path={'/about'} render={(routerProps) => {
          return(
            <>
              <Navbar {...routerProps} loggedIn={this.loggedIn}/>
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
    search: state.search,
    id: state.user.user,
    comments: state.comments.comments
  }
}

export default connect(mapStateToProps)(App);
