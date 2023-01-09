import {combineReducers, createReducer, on} from "@ngrx/store";
import {initialState} from "./product.state";
import {addProduct, deleteProduct, updateProductFailure, updateProductSuccess} from "./product.action";
import {state} from "@angular/animations";
import {LoadProductSuccess, loadProduct,LoadProductFailure} from "./product.action";

export const productReducer = createReducer(

  initialState,

  on(addProduct,(state,{name,price,imageURL})=>({
    ...state,
    products:[...state.products,{id:Date.now().toString(),name:name,price:price,imageURL:imageURL}],
  })),

  on(deleteProduct,(state,{id})=>({
    ...state,
    products:state.products.filter((product)=>product.id !== id),
  })),

  on(loadProduct,(state)=>({
    ...state,
    status:'loading'
  })),

  on(LoadProductSuccess,(state,{products})=>({
    ...state,
    products,
    error:'',
    status:'success'
  })),

  on(LoadProductFailure,(state,{error})=>({
    ...state,
    error:error,
    status:'error'
  })),
  on(updateProductSuccess, (state, action)=> {
    const updatedProducts = state.products.map(
      item => action.products.id === item.id ? action.products : item);
    return {
      ...state,
      products: updatedProducts,
      currentProductId: action.products.id,
      error: ''
    };
  }),
  on(updateProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  })



)
