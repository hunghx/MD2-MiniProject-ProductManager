import React, { useEffect } from 'react'
import { ListProducts } from './products/ListProducts'
import { useDispatch, useSelector } from 'react-redux'
import { act_getAll_Product } from '../actions/productActions';


export const Products = () => {
  let products = useSelector(state => state.productReducer.listProducts)
  const dispatch = useDispatch();
  useEffect(() =>{
      dispatch(act_getAll_Product());
  },[])
  return (
    <ListProducts products={products}/>
    )
}
