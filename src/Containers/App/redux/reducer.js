import { 
    GET_DATA_WAITING,
    GET_DATA_SUCCESS,
    GET_DATA_FAILED,
  } from "./constants";
  
const initialState = { 
categories: [], 
categoryTab: [], 
loading: true,
error: ""

}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_WAITING:
          return {
            ...state,
            loading: true,
          };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload.categories,
                categoryTab: action.payload.categoryTab
            }

        case GET_DATA_FAILED:
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