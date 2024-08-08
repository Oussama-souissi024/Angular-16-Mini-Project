import { Component, OnInit } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private service : ProductService
  ){}

products : ProductRepresentation[] = [];

ngOnInit(): void {
  this.service.GetAllProductWithLimit()
  .subscribe({
    next: (result: ProductRepresentation[]) => {
      console.log(result);
      this.products = result;
    },
    error: (err: HttpErrorResponse) => {
      if (err.error instanceof ErrorEvent) {
        console.error('An Error Occurred: ', err.error.message);
      } else {
        console.error('Error Server Side: ', err.message);
      }
    }
  });
}

}
