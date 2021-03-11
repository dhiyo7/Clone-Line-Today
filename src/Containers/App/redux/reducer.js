import { 
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
  } from "./constants";
  
const initialState = { 
categories: [], 
categoryTab: [], 
loading: true,
error: ""

}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload.categories,
                categoryTab: action.payload.categoryTab
            }

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    
    }
}

export default appReducer