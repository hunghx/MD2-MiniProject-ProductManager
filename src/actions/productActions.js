

export const act_getAll_Product=()=>{
    return{
        type : "ACT_GETALL_PRODUCT",
        payload: null
    }
} 
export const act_getAll_Product_Success=(data)=>{
    return{
        type : "ACT_GETALL_PRODUCT_SUCCESS",
        payload: data
    }
} 

export const act_delete_product=(id)=>{
    return{
        type : "ACT_DELETE_PRODUCT",
        payload: id 
    }
}
export const act_add_new_product=(data)=>{
    return{
        type : "ACT_ADD_NEW_PRODUCT",
        payload: data 
    }
} 
export const get_product_by_id=(id)=>{
    return{
        type : "ACT_GET_PRODUCT_BY_ID",
        payload: id
    }
} 
export const get_product_by_id_success=(data)=>{
    return{
        type : "ACT_GET_PRODUCT_BY_ID_SUCCESS",
        payload: data
    }
} 
export const update_product=(data)=>{
    return{
        type : "ACT_UPDATE_PRODUCT",
        payload: data 
    }
} 

