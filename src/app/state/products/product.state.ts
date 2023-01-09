import * as AppState from '../../state/app.state';
import {ProductModel} from "../../product/product.model";
export interface state extends AppState.State{
  products:ProductState
}

export interface ProductState{
  products:ProductModel[],
  error:string,
  status:'pending'|'loading'|'success'|'error';
}

export const initialState:ProductState={
  products:[],
  error:'',
  status:'pending'
}
