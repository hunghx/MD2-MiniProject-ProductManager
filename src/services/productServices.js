import instances from "."

// Lấy toàn bộ sản phẩm 
export const getAllProduct = async ()=>{
    let res = await instances.get("products")
    return res
}
// lấy thông tin sản phẩm theo id
export const getProductById = async (id)=>{
    let res = await instances.get(`products/${id}`)
    return res
}
// thêm mới 1 sản phẩm
export const createNewProduct = async (data)=>{
    let res = await instances.post(`products`,data)
    return res
}
// chỉnh sửa 1 san phẩm
export const updateProduct = async (data)=>{
    let res = await instances.put(`products/${data.id}`,data)
    return res
}
// xóa 1 sản phẩm
export const deleteProduct = async (id)=>{
    let res = await instances.delete(`products/${id}`)
    return res
}