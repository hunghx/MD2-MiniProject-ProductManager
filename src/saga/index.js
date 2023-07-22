
import {takeLatest} from 'redux-saga/effects'
import { getAllProduct,addNewProduct,deleteProduct,getProductById ,updateProducts} from './productSaga';

const rootsaga = function*(){
    yield takeLatest("ACT_GETALL_PRODUCT",getAllProduct)
    yield takeLatest("ACT_ADD_NEW_PRODUCT",addNewProduct)
    yield takeLatest("ACT_DELETE_PRODUCT",deleteProduct)
    yield takeLatest("ACT_GET_PRODUCT_BY_ID",getProductById)
    yield takeLatest("ACT_UPDATE_PRODUCT",updateProducts)
}
export default rootsaga;