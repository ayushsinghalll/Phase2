import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ProductModel} from "./product.model";
import {getProducts} from "../state/products/product.selector";
import {Store} from "@ngrx/store";
import {addProduct, deleteProduct, loadProduct, updateProduct} from "../state/products/product.action";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  public allProducts$:Observable<ProductModel[]> =
    this.store.select(getProducts)

  public products = '';
  constructor(private store:Store) {}

  ngOnInit() : void{
    console.log('in init')
    this.store.dispatch(loadProduct())
  }


  onSubmit(productForm: NgForm) {
    const  name = productForm.form.value.name
    const price = productForm.form.value.price
    const img = productForm.form.value.img
    this.store.dispatch(addProduct({imageURL:img, price: price, name:name}))
  }

  removeProduct(product: ProductModel) {
    this.store.dispatch(deleteProduct({id:product.id}))
  }

  updateProduct(product: ProductModel) {


  }
}
