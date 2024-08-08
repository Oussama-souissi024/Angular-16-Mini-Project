import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { Observable } from 'rxjs';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private BaseUrl : string = 'https://fakestoreapi.com/';

  constructor(
    private http: HttpClient
  ) { }

  GetAllProductWithLimit( limit: number = 10): Observable<any> {
    //const ProductUrl: string = this.BaseUrl + 'products?limit=' + 10;
    const ProductUrl: string = `${this.BaseUrl}products?limit=${limit}`;   
    return this.http.get<Array<ProductRepresentation>>(ProductUrl);
  }

  CreateProduct(product : ProductRepresentation):Observable<ProductRepresentation>{
    const ProductUrl: string = `${this.BaseUrl}products`;
    return this.http.post<ProductRepresentation>(ProductUrl,product);
  }
}
