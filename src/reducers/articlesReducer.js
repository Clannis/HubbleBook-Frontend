export default function articlesReducer(state = {articles: [], requesting: false, activeArticle: {}, error: {}}, action) {
    switch (action.type) {
        case 'START_ADDING_HUBBLE_ARTICLES_REQUEST':
            return {...state,
                articles: state.articles,
                requesting: true,
                activeArticle: {},
                error: {}
            }
        case 'ADD_ARTICLES':
            return {...state,
                articles: action.articles,
                requesting: false,
                activeArticle: {},
                error: {}
            }
        case 'START_GETTING_ARTICLE_REQUEST':
            return {...state,
                articles: state.articles,
                requesting: true,
                activeArticle: {},
                error: {}
            }
        case 'ADD_ACTIVE_ARTICLE':
            return {...state,
                articles: state.articles,
                requesting: false,
                activeArticle: action.article,
                error: {}
            }

        case 'START_SEARCH_ARTICLES_REQUEST':
            return {...state,
                articles: state.articles,
                requesting: true,
                activeArticle: {},
                error: {}
            }
        case 'SEARCH_ARTICLES':
            return{
                ...state,
                articles: action.articles,
                requesting: false,
                activeArticle: {},
                error: {}
            }
        case "ADD_ERROR":
            return {
                ...state,
                articles: state.articles,
                requesting: false,
                activeArticle: {},
                error: action.message
            }
        default:
            return state
    }
}