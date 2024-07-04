import axios from "axios";
import { ADD_EACH_ALLPRODUCT, ADD_EACH_DETILES_PRODUCT, ADD_EACH_PRODUCT, ADD_PRODUCT, EACH_PRODUCT_ID, GET_COLOR_SIZE_PRODUCT, GET_MEN, GET_ONE_SUBPRODUCT, GET_PRODUCT, GET_PRODUCTID_LIST, GET_SUBPRODUCT, SUB_ADD_PRODUCT } from "./ProductConst";
import { environmentURL } from "../../../environmentURL";
import { toast } from "react-toastify";


export const getAddProduct = (data) => async (dispatch) => {
    console.log("calling axios");
    try {
        // Making GET request
        const response = await axios.post(`${environmentURL}/products`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
        );
        console.log(response.data);
        dispatch({ type: ADD_PRODUCT, payload: response.data });
        console.log(response.data);
        // Dispatch action with response data if needed
    } catch (error) {
        toast(error)
        console.error(error);
    }
};



export const getALLProduct = () => async (dispatch) => {
    console.log("calling axios");
    try {
        // Making GET request
        const response = await axios.get(`${environmentURL}/products`);
        console.log(response.data);
        dispatch({ type: GET_PRODUCT, payload: response.data });
        console.log(response.data);
        // Dispatch action with response data if needed
    } catch (error) {
        toast.error(`Error fetching products: ${error.code}`);
        console.error(error);
    }
};


export const getALLMenProduct = (data) => async (dispatch) => {
    console.log("calling axios");
    try {
        // Making GET request
        const response = await axios.post(`${environmentURL}/men`, data);
        console.log(response.data);
        dispatch({ type: GET_MEN, payload: response.data });
        console.log(response.data);
        // Dispatch action with response data if needed
    } catch (error) {
        console.error(error);
    }
};



export const getEachProductId = (productId) => async (dispatch) => {
    console.log("calling axios", productId);
    try {
        // Making GET request
        //products/29
        const response = await axios.get(`${environmentURL}/products/${productId}`);
        console.log(response.data);
        dispatch({ type: EACH_PRODUCT_ID, payload: response.data });
        console.log(response.data);
        // Dispatch action with response data if needed
    } catch (error) {
        console.error(error);
    }
};









export const getAddEachProduct = (data) => async (dispatch) => {
    console.log("calling axios");
    try {
        // Making GET request
        const response = await axios.post(`${environmentURL}/eachproducts`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
        );
        console.log(response.data);
        dispatch({ type: ADD_EACH_PRODUCT, payload: response.data });
        console.log(response.data);
        // Dispatch action with response data if needed
    } catch (error) {
        console.error(error);
    }
};


export const getALLEachProduct = () => async (dispatch) => {
    console.log("calling axios");
    try {
        // Making GET request
        const response = await axios.get(`${environmentURL}/eachproducts`);
        console.log(response.data);
        dispatch({ type: ADD_EACH_ALLPRODUCT, payload: response.data });
        console.log(response.data);
        // Dispatch action with response data if needed
    } catch (error) {
        console.error(error);
    }
};



export const getEachOneProduct = (productId) => async (dispatch) => {
    console.log("calling axios");
    try {
        // Making GET request
        const response = await axios.get(`${environmentURL}/eachproducts/${productId}`);
        console.log(response.data);
        dispatch({ type: ADD_EACH_DETILES_PRODUCT, payload: response.data });
        console.log(response.data);
        // Dispatch action with response data if needed
    } catch (error) {
        console.error(error);
    }
};


export const getEachProductIDList = (productId) => async (dispatch) => {
    console.log("calling axios");
    try {
        // Making GET request
        const response = await axios.get(`${environmentURL}/eachproductid/${productId}`);
        console.log(response.data);
        dispatch({ type: GET_PRODUCTID_LIST, payload: response.data });
        console.log(response.data);
        // Dispatch action with response data if needed
    } catch (error) {
        console.error(error);
    }
};


//================================================ SUb Product =======================================================


export const getSubAddProduct = (data) => async (dispatch) => {
    console.log("calling axios");
    try {
        // Making GET request
        const response = await axios.post(`${environmentURL}/subproducts`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
        );
        console.log(response.data);
        dispatch({ type: SUB_ADD_PRODUCT, payload: response.data });
        console.log(response.data);
        // Dispatch action with response data if needed
    } catch (error) {
        console.error(error);
    }
};




export const getALLSubProduct = () => async (dispatch) => {
    console.log("calling axios");
    try {
        // Making GET request
        const response = await axios.get(`${environmentURL}/subproducts`);
        console.log(response.data);
        dispatch({ type: GET_SUBPRODUCT, payload: response.data });
        console.log(response.data);
        // Dispatch action with response data if needed
    } catch (error) {
        console.error(error);
    }
};


export const getSubOneProduct = (productId) => async (dispatch) => {
    console.log("calling axios");
    try {
        // Making GET request
        const response = await axios.get(`${environmentURL}/subproducts/${productId}`);
        console.log(response.data);
        dispatch({ type: GET_ONE_SUBPRODUCT, payload: response.data });
        console.log(response.data);
        // Dispatch action with response data if needed
    } catch (error) {
        console.error(error);
    }
};


export const getSubColorandSizeProduct = (productId) => async (dispatch) => {
    console.log("calling axios");
    try {
        // Making GET request
        const response = await axios.get(`${environmentURL}/subproductsid/${productId}`);
        console.log(response.data);
        dispatch({ type: GET_COLOR_SIZE_PRODUCT, payload: response.data });
        console.log(response.data);
        // Dispatch action with response data if needed
    } catch (error) {
        console.error(error);
    }
};




//http://localhost:3000/api/v1/subproductsid/1?color=blue&size=S



//http://localhost:3000/api/v1/subproducts/1
//subproducts