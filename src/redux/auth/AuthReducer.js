
import { MEDICINE_TYPE, PRODUCT_LIST } from "./AuthConst";

const initialState = {
    medicinedata: {},
    productlist: {},
    isLoading: false,
};

export const MedicineReducer = (state = initialState, action) => {
    switch (action.type) {
        case MEDICINE_TYPE:
            return {
                ...state,
                medicinedata: action.payload,
                isLoading: true,
            };

        case PRODUCT_LIST:
            return {
                productlist: action.payload,
                isLoading: true,
            }
        default:
            return state;
    }
};
