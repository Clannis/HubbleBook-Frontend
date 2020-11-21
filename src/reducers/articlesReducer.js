export default function articlesReducer(state = { articles: [], activeArticle: {} }, action) {
    switch (action.type) {
        case 'ADD_ARTICLES':
            return {...state,
                articles: action.articles,
                activeArticle: state.activeArticle
            }
        case 'ADD_ACTIVE_ARTICLE':
            return {...state,
                articles: state.articles,
                activeArticle: action.article
            }
        default:
            return state
    }
}