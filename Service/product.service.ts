import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../src/app/product/iProduct";

@Injectable({
  providedIn:'root'
})

export class ProductService {
  private  url = 'api/product.json'
  constructor(private http:HttpClient) {
  }
  getProducts():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url)

  }
}
