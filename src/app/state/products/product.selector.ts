import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProductState} from "./product.state";
import {state} from "@angular/animations";

export const productDataState = createFeatureSelector<ProductState>('products')

export const getProducts = createSelector(productDataState,state=>state.products)
