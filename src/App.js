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
    console.log(this.props.id ? true : false)
    return this.props.id ? true : false
  }

  render() {
    return (
      <>
        <Route exact path="/" render={() => <Welcome/> } />

        <Route path="/Login" >
          {this.loggedIn() ? <Redirect to="/articles" /> : <Login />}
        </Route>

        <Route path="/Signup" >
          {this.loggedIn() ? <Redirect to="/articles" /> : <Signup />}
        </Route>

        <Route exact path="/articles">
          {this.loggedIn() ? 
            (<>
              <Navbar loggedIn={true}/>
              <ArticlesContainer articles={this.props.articles} requesting={this.props.requesting}/>
            </> )
          : 
           <Redirect to="/" />}  
        </Route> 

        <Route exact path={'/search'}>
          {this.loggedIn() ? 
            <>
              <Navbar loggedIn={true}/>
              <SearchCategoryContainer search={this.props.search} requesting={this.props.requesting}/>
            </>
          : 
           <Redirect to="/" />}
        </Route>

        <Route path={'/articles/:article_id'} render={(routerProps) => {
          return this.loggedIn() ? 
            <>
              <Navbar loggedIn={true}/>
              <ActiveArticle {...routerProps} activeArticle={this.props.activeArticle} requesting={this.props.requesting}/>
            </>
            : 
            <Redirect to="/" />
        }} />
        
        <Route path={'/missions/:mission_name'} render={(routerProps) => {
          return this.loggedIn() ? 
            <>
              <Navbar loggedIn={true}/>
              <MissionContainer {...routerProps} articles={this.props.articles} requesting={this.props.requesting}/>
            </>
            : 
            <Redirect to="/" />
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
    search: state.search,
    id: state.user.user
  }
}

export default connect(mapStateToProps)(App);
