import { call, put } from "redux-saga/effects";
import * as productApi from '../services/productServices';
import { act_getAll_Product_Success, get_product_by_id_success } from "../actions/productActions";

export const getAllProduct = function*(action){
    try{
        // gọi api
         let res  = yield call(productApi.getAllProduct);
         console.log(res);

        // thành công
        yield put(act_getAll_Product_Success(res.data))
    }catch (err){
        // lỗi 
        console.log(err);
    }
}
export const addNewProduct = function*(action){
    try {
        yield call(productApi.createNewProduct,action.payload)

        // thành công 
       yield call(getAllProduct)
    }catch (err){
        console.log(err);
    }
}
export const deleteProduct = function*(action){
    try {
        yield call(productApi.deleteProduct,action.payload)
        // thành công 
        yield call(getAllProduct)
    }catch (err){
        console.log(err);
    }
}
export const updateProducts = function*(action){
    try {
        yield call(productApi.updateProduct,action.payload)
        // thành công 
        yield call(getAllProduct)
    }catch (err){
        console.log(err);
    }
}


export const getProductById = function*(action){
    try {
        let res = yield call(productApi.getProductById,action.payload)
        // thành công 
        yield put(get_product_by_id_success(res.data))
    }catch (err){
        console.log(err);
    }
}