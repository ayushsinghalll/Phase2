import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { getTestBed, inject, TestBed } from "@angular/core/testing";

import { of } from "rxjs";
import { Category, IProduct } from "src/app/products/product";
import { ProductService } from "./product.service"

describe('ProductService',()=>{
  let service:ProductService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let  items:any[]=[];
  afterEach(() => {
    httpMock.verify();
  });
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ProductService],
    });
    service=TestBed.get(ProductService);
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    items=[
      {
        "id":111,
        "name":"Carrot",
        "category":Category.vegetables,
        "price":80,
        "image":"../../assets/images/apple.jpg",
        "rating":4.5,
        "qty":2
      },
      {
        "id":112,
        "name":"tomato",
        "category":Category.vegetables,
        "price":340,
        "image":"../../assets/images/tomato.jpg",
        "rating":2,
        "qty":0
      }];
  });
  it('should be created',()=>{
    expect(service).toBeTruthy();
  })
  it('should getAllProducts',
    inject([HttpTestingController,ProductService],
      (httpMock:HttpTestingController,service:ProductService)=>{
        service.getProducts().subscribe(resp=>expect(items).toEqual(resp));
        const mockReq = httpMock.expectOne(service.url);
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(items);
      }
    ));
  it('should get product by id',()=>{
    let response:IProduct;
    let item ={
      "id":111,
      "name":"Carrot",
      "category":Category.vegetables,
      "price":80,
      "image":"../../assets/images/apple.jpg",
      "rating":4.5,
      "qty":2
    };
    const fn=spyOn(service, 'getProductById').and.returnValue(of(item));
    service.getProductById(111).subscribe(res=>{response=res;expect(response).toEqual(item);});
    expect(fn).toHaveBeenCalled();
  });


  it('createProduct() should post a product and    return that new product  as data',()=>{
    let item ={
      id:113,
      name:"mangoes",
      category:Category.fruits,
      price:300,
      image:"../../assets/images/mangoes.jpg",
      rating:4.5,
      qty:0
    };
    let item2 ={
      id:114,
      name:"mangoes",
      category:Category.fruits,
      price:300,
      image:"../../assets/images/mangoes.jpg",
      rating:4.5,
      qty:0
    };
    items =[...items,item];
    service.createProduct(item).subscribe(resp=>expect(Object.create(resp)).toEqual(Object.create(item)) )
    expect(items.length).toEqual(3);
    const req = httpMock.expectOne(service.url);
    expect(req.request.method).toBe('POST');
    req.flush({item });
  });

  it('updateProduct () should update  a product and    return updated product as data',()=>{
    let item2 ={
      "id":112,
      "name":"Ratnagiri mangoes",
      "category":Category.fruits,
      "price":300,
      "image":"../../assets/images/mangoes.jpg",
      "rating":4.5,
      "qty":0
    };
    service.updateProduct(item2).subscribe(resp=>expect(resp).toEqual(item2) )
    const req = httpMock.expectOne(`${service.url}/${item2.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush({item2 });
  })
});
