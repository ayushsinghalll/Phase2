import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {FormsModule} from "@angular/forms";
import {ProductRoutingModule} from "./product-routing.module";
import {StoreModule} from "@ngrx/store";
import {productReducer} from "../state/products/product.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ProductEffects} from "../state/products/product.effects";


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    StoreModule.forFeature('products',productReducer),
    EffectsModule.forFeature(ProductEffects)
  ]
})

export class ProductModule { }
