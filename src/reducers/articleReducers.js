import { ARTICLE_LIST_REQUEST,
        ARTICLE_LIST_SUCCESS,
        ARTICLE_LIST_FAIL,
        
        ARTICLE_DETAILS_REQUEST,
        ARTICLE_DETAILS_SUCCESS,
        ARTICLE_DETAILS_FAIL,
} from "../constants/articleConstants";


export const articleListReducer = (state = { articles: [] }, action) => {
    switch (action.type) {
        case ARTICLE_LIST_REQUEST:
            return { loading: true, articles: [] }

        case ARTICLE_LIST_SUCCESS:
            return {
                loading: false,
                articles: action.payload.articles,
                page: action.payload.page,
                pages: action.payload.pages
            }

        case ARTICLE_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const articleDetailsReducer = (state = {article:{} }, action) => {
    switch (action.type) {
        case ARTICLE_DETAILS_REQUEST:
            return { loading: true, ...state }

        case ARTICLE_DETAILS_SUCCESS:
            return { loading: false, article: action.payload }

        case ARTICLE_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}