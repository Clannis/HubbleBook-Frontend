export default function articlesReducer(state = {articles: [], requesting: false, activeArticle: {}}, action) {
    switch (action.type) {
        case 'START_ADDING_HUBBLE_ARTICLES_REQUEST':
            return {...state,
                articles: state.articles,
                requesting: true
            }
        case 'ADD_ARTICLES':
            return {...state,
                articles: action.articles,
                requesting: false
            }
        case 'START_GETTING_ARTICLE_REQUEST':
            return {...state,
                articles: state.articles,
                requesting: true,
                activeArticle: {}
            }
        case 'ADD_ACTIVE_ARTICLE':
            return {...state,
                articles: state.articles,
                requesting: false,
                activeArticle: action.article
            }
        case 'SEARCH_ARTICLES':
            return{
                ...state,
                articles: action.articles,
                requesting: false,
                activeArticle: {}
            }
        default:
            return state
    }
}