import { ADD_EACH_ALLPRODUCT, ADD_EACH_DETILES_PRODUCT, ADD_EACH_PRODUCT, ADD_PRODUCT, EACH_PRODUCT_ID, GET_COLOR_SIZE_PRODUCT, GET_MEN, GET_ONE_SUBPRODUCT, GET_PRODUCT, GET_PRODUCTID_LIST, GET_SUBEACH_ONE, GET_SUBPRODUCT, SUB_ADD_PRODUCT } from "./ProductConst";



const initialState = {
    addproduct: {},
    getproduct: {},
    getmen: {},
    eachproduct: {},
    addsubproduct: {},
    allsubproduct: {},
    getonesubporduct: {},
    getmultiproduct: {},
    getcolorsize: {},
    isLoading: false,
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                addproduct: action.payload,
                isLoading: true,
            };
        case GET_PRODUCT:
            return {
                ...state,
                getproduct: action.payload,
                isLoading: true,
            }

        case GET_MEN:
            return {
                ...state,
                getmen: action.payload,
                isLoading: true,
            }

        case SUB_ADD_PRODUCT:
            return {
                ...state,
                addsubproduct: action.payload,
                isLoading: true,
            }

        case EACH_PRODUCT_ID:
            return {
                ...state,
                eachproduct: action.payload,
                isLoading: true,
            }

        case ADD_EACH_PRODUCT:
            return {
                ...state,
                addeachproduct: action.payload,
                isLoading: true
            }

        case ADD_EACH_ALLPRODUCT:
            return {
                ...state,
                eachallproduct: action.payload,
                isLoading: true
            }
        case ADD_EACH_DETILES_PRODUCT:
            return {
                eachoneproduct: action.payload,
                isLoading: true
            }

        case GET_PRODUCTID_LIST:
            return {
                ...state,
                getproductid: action.payload,
                isLoading: true
            }

        case GET_SUBPRODUCT:
            return {
                ...state,
                allsubproduct: action.payload,
                isLoading: true
            }
        case GET_ONE_SUBPRODUCT:
            return {
                ...state,
                getonesubporduct: action.payload,
                isLoading: true
            }

        case GET_SUBEACH_ONE:
            return {
                ...state,
                getmultiproduct: action.payload,
                isLoading: true
            }

        case GET_COLOR_SIZE_PRODUCT:
            return {
                ...state,
                getcolorsize: action.payload,
                isLoading: true
            }
        default:
            return state;
    }
}