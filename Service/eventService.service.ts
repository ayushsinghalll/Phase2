import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, tap, throwError} from "rxjs";
import {IEvent} from "../src/app/event/event";


@Injectable({
  providedIn:'root'
})

export class EventService{
  private  url = 'api/event/'
  events:IEvent[]=[]
  private selectedEventSource = new BehaviorSubject<IEvent | null>(null)
  selectedEventChanges$=this.selectedEventSource.asObservable();
  constructor(private http:HttpClient) {
  }
  getEvents():Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.url).pipe(

      tap(data=>{console.log(data);
        //we are assigning data to this.products
        this.events=data;
      }),
      catchError(this.errorHandler)
    );

  }
  changeSelectedEvent(selectedProduct:IEvent | null):void{

    this.selectedEventSource.next(selectedProduct);
  }
  errorHandler=(err:any)=>{

    let errorMessage:string;
    //a client side error or network error then ErrorEvent object will be thrown

    if(err.error instanceof ErrorEvent)
    {
      errorMessage = `An error has occurred ${err.error.message}`
    }
    else{

      errorMessage =  `Backend error code ${err.status} ${err.body.error}`;

    }
    console.log(err);
    return throwError(errorMessage);

  }

  newProduct():IEvent{
    //logic should focus on sending back a IProduct
    return {
      date: "", imageURL: "", location: {address: "", city: "", country: ""}, time: "",
      id:0,
      name:'',
      price:0,
    };

  }
  createProduct(product:IEvent):Observable<IEvent>{
    //headers variable to set request headers
    const headers= new HttpHeaders({'Content-Type':'application/json'});

    //newProduct spread across product
    const newProduct={...product,id:null};


    //return logic starts here
    //http .post method
    //generics method -- IProduct
    //args --3 url , newProduct ,headers
    //this.url -- declared in the class outside the functions
    return this.http.post<IEvent>(this.url,newProduct,{headers})
      .pipe(
        tap(data=>{

            console.log('in create new product'+ JSON.stringify(data));
            //pushing the new data new Product to the products array
            this.events.push(data);

          },
          catchError(this.errorHandler)
        )
      )
  }
  deleteProduct(id:number):Observable<{}>{
    const headers= new HttpHeaders({'Content-Type':'application/json'});

    //@DeleteMapping deleteAll delete url/id  /api/products/111
    const url= `${this.url}/${id}`;

    return this.http.delete<IEvent>(url,{headers})
      .pipe(
        tap(data=>{
            console.log('deleted prd'+id);
            const foundIndex = this.events.findIndex(item=>item.id===id);
            //if product id is not found means index returned will be -1
            if(foundIndex > -1)
              this.events.splice(foundIndex,1);
          },
          catchError(this.errorHandler))
      );

  }
  updateProduct(product:IEvent):Observable<IEvent>{
    const headers= new HttpHeaders({'Content-Type':'application/json'});

    //put http method
    const url= `${this.url}/${product.id}`;

    //logic to call http put method to update the product on the given url
    return this.http.put<IEvent>(url,product, {headers}).pipe(

      tap(()=>{console.log('update product'+product.id);
        const foundIndex =this.events.findIndex(item=>item.id === product.id);
        if(foundIndex > -1){
          this.events[foundIndex]=product;
        }
      }),
      map(()=>product),
      catchError(this.errorHandler)
    );

  }
}
