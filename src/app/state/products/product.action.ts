import {createAction, props} from "@ngrx/store";
import {ProductModel} from "../../product/product.model";

export const addProduct = createAction(
  '[Product Page] Add Product',
  props<{name:string,price:number,imageURL:string}>()
)

export const deleteProduct = createAction(
  '[Product Page] Delete Product',
  props<{id:string}>()
)

export const loadProduct = createAction('[Product Page] Load Products')

export const LoadProductSuccess = createAction(
  '[Product Page] Product Load Success',
  props<{products:ProductModel[]}>()
)

export const LoadProductFailure = createAction(
  '[Product Page] Product Load Failure',
  props<{error:string}>()
)
export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ products: ProductModel }>()
);

export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{ products: ProductModel }>()
);

export const updateProductFailure = createAction(
  '[Product] Update Product Fail',
  props<{ error: string }>()
);
