import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { act_add_new_product, act_delete_product, get_product_by_id, update_product } from "../../actions/productActions";


export const ListProducts = ({products}) => {

    let productEdit = useSelector(state=>state.productReducer.editProduct);
    // tạo 1 state lưu trữ 3 thông tin cần thêm mới cho sản phẩm
    const [newProduct ,setNewProduct] = useState({
        productName:"",
        description:"",
        price:0
    })

    const handleInputChangeNewProduct = (e)=>{
            let name = e.target.name;
            let value = e.target.value;
            setNewProduct({...newProduct,[name]:value})
    }
    const [updateProduct ,setUpdateProduct] = useState({
        id:"",
        productName:"",
        description:"",
        price:0
    })

    const handleInputChangeUpdateProduct = (e)=>{
            let name = e.target.name;
            let value = e.target.value;
            setUpdateProduct({...updateProduct,[name]:value})
    }

    const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const [openEdit, setOpenEdit] = useState(false);
  const showModalEdit = () => {
    setOpenEdit(true);
  };
  const hideModalEdit = () => {
    setOpenEdit(false);
  };
  // chỉnh sửa sản phẩm
  const editProduct = (id) => {
    dispatch(get_product_by_id(id))
    showModalEdit();
  }
  // Cập nhật lại trên server
  const handleUpdateProduct =()=>{
        dispatch(update_product(updateProduct))
        hideModalEdit();
  }
// thêm moiws
const onFinish = () => {
    dispatch(act_add_new_product(newProduct));
    hideModal();
  };
// xóa 1 product 
const deleteProduct = (id)=>{
    if(window.confirm("Are you sure you want to delete this product?")){
        dispatch(act_delete_product(id));
    }
}

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "ProductName",
     
      key: "productName",
    },
    {
      title: "Description",
      
      key: "description",
    },
    {
      title: "Price",
      key: "price",
      dataIndex:"price"
    },
    {
        title:"Action",
        key:"id",
        dataIndex:"id",
        render: (value)=><><Button type="primary" onClick={()=>editProduct(value)} >Edit</Button> <Button type="primary" danger onClick={()=>deleteProduct(value)} >Delete</Button></>
    }
  ];

useEffect(()=>{
    setUpdateProduct(productEdit);
},[productEdit])


  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add new Product
      </Button>
    
      <Table columns={columns} dataSource={products}/>

      {/* Modal thêm mới */}
      <Modal
        title="New Product"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
      >
        {/* Nội dung của modal - form thêm mới */}
        <Form name="form" layout="vertical" >
          <Form.Item
           label="Product Name"
          >
            <Input name="productName" value={newProduct.productName} onChange={handleInputChangeNewProduct}/>
          </Form.Item>
          <Form.Item
           label="Product Description"
          >
            <Input name="description"  value={newProduct.description} onChange={handleInputChangeNewProduct}/>
          </Form.Item>
          <Form.Item
           label="Price"
          >
            <Input name="price" type="number"  value={newProduct.price} onChange={handleInputChangeNewProduct}/>
          </Form.Item>
          <Button primary type="primary" onClick ={onFinish}>Add</Button>
        </Form>
        {/* Nội dung của modal - form thêm mới */}
      </Modal>
      
      {/* Modal thêm mới */}

      {/* Modal chỉnh sửa */}
      <Modal
        title="Edit Product"
        open={openEdit}
        onOk={hideModalEdit}
        onCancel={hideModalEdit}
      >
        {/* Nội dung của modal - form chỉnh */}
        <Form name="form_item_path" layout="vertical">

          <Form.Item
           label="Product ID"
          >
            <Input value={updateProduct.id} name="productId" readOnly/>
          </Form.Item>
          <Form.Item
           label="Product Name"
          >
            <Input name="productName" value={updateProduct.productName} onChange={handleInputChangeUpdateProduct}/>
          </Form.Item>
          <Form.Item
           label="Product Description"
          >
            <Input name="description"  value={updateProduct.description} onChange={handleInputChangeUpdateProduct}/>
          </Form.Item>
          <Form.Item
           label="Price"
          >
            <Input name="price" type="number"  value={updateProduct.price} onChange={handleInputChangeUpdateProduct}/>
          </Form.Item>
          <Button type="primary" primary onClick={handleUpdateProduct}>Update</Button>
        </Form>
        {/* Nội dung của modal - form chỉnh sửa */}
      </Modal>

      {/* Modal chỉnh sửa */}
    </div>
  );
};
