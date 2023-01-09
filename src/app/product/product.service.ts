import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, tap, throwError} from "rxjs";
import {ProductModel} from "./product.model";

@Injectable({
  providedIn:'root'
})

export class ProductService{

  constructor(private http:HttpClient) {
  }
  public url = 'api/product/'
  products:ProductModel[]=[];

  getProducts():Observable<ProductModel[]>{
   return this.http.get<ProductModel[]>(this.url).pipe(
     tap(data=>console.log(JSON.stringify(data))),
     catchError(this.errorHandler)
   )
  }


  createProduct(product:ProductModel):Observable<ProductModel>{
    const headers = new HttpHeaders('Content-type:application/json')
    return this.http.post<ProductModel>(this.url,product,{headers})
      .pipe(tap(data=>console.log(data)),
        catchError(this.errorHandler))
  }


  updateProduct(product:ProductModel):Observable<ProductModel>{
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    const url = `${this.url}/${product.id}`

    return this.http.put<ProductModel>(url,product,{headers}).pipe(
      tap(()=> {
        console.log('Update Product' + product.id);
        const foundIndex = this.products.findIndex(item => item.id === product.id)
        if (foundIndex > -1) {
          this.products[foundIndex] = product
        }
      }),
      map(()=>product),
      catchError(this.errorHandler)
    )
  }






    private errorHandler(err:any){
      let errorMessage :string;
      if(err.error instanceof ErrorEvent){
        errorMessage=`An error occured ${err.error.message}`;
      }
      else{
        errorMessage=`Backend returned code ${err.status} ${err.body.error}`;
      }
      console.log(err);
      return throwError(errorMessage);
    }
  }







