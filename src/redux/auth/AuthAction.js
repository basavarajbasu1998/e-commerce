import axios from 'axios';
import { MEDICINE_TYPE, PRODUCT_LIST } from "./AuthConst";

// export const Medicine = () => async (dispatch) => {
//     console.log("calling axios")
//     try {
//         // Making GET request
//         const response = await axios.get('https://backend.cappsule.co.in/api/v1/new_search', {
//             params: {
//                 q: 'paracetamol',
//                 pharmacyIds: '1,2,3'
//             }
//         });

//         console.log(response.data);
//         dispatch({ type: MEDICINE_TYPE, payload: response.data });
//         console.log(response.data);
//         // Dispatch action with response data if needed
//     } catch (error) {
//         console.error(error);
//     }
// };


export const Medicine = (data, pharmacyIds) => async (dispatch) => {
    console.log("calling axios");
    try {
        // Making GET request
        const response = await axios.get('https://backend.cappsule.co.in/api/v1/new_search', {
            params: {
                q: data, // Use the provided medicine name
                pharmacyIds: pharmacyIds.join(',')
            }
        });

        console.log(response.data);
        dispatch({ type: MEDICINE_TYPE, payload: response.data });
        console.log(response.data);
        // Dispatch action with response data if needed
    } catch (error) {
        console.error(error);
    }
};


//https://fakestoreapi.com/products



export const getProduct = (data, pharmacyIds) => async (dispatch) => {
    console.log("calling axios");
    try {
        // Making GET request
        const response = await axios.get('https://backend.cappsule.co.in/api/v1/new_search', {
            params: {
                q: data, // Use the provided medicine name
                pharmacyIds: pharmacyIds.join(',')
            }
        });

        console.log(response.data);
        dispatch({ type: MEDICINE_TYPE, payload: response.data });
        console.log(response.data);
        // Dispatch action with response data if needed
    } catch (error) {
        console.error(error);
    }
};



export const getProductList = (data, pharmacyIds) => async (dispatch) => {
    console.log("calling axios");
    try {
        // Making GET request
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data);
        dispatch({ type: PRODUCT_LIST, payload: response.data });
        console.log(response.data);
        // Dispatch action with response data if needed
    } catch (error) {
        console.error(error);
    }
};