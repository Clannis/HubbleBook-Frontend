export default function articlesReducer(state = {articles: [], requesting: false}, action) {
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
        default:
            return state
    }
}