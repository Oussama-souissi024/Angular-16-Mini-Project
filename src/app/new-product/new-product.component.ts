import { Component } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {

  constructor(
    private service: ProductService,
    private router: Router
  ) {}

  product: ProductRepresentation = {};

  SaveProduct(): void {
    this.service.CreateProduct(this.product)
    .subscribe({
      next: (result: ProductRepresentation) => {
        console.log(result);
        this.router.navigate(['products']); 
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
