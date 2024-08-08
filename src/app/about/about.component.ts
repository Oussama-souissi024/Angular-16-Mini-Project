import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ProductService
  ) { }

  param: any;
  queryParam: any;

  ngOnInit() {
    console.log(this.activatedRoute);
    this.param = this.activatedRoute.snapshot.params['username'];
    this.queryParam = this.activatedRoute.snapshot.queryParams['course'];
    /*
    this.service.GetAllProductWithLimit()
      .subscribe({
        next: (data: ProductRepresentation[]) => {
          console.log(data);
        },
        error: (err: any) => {
          console.error(err);
        }
      }); */

      const product: ProductRepresentation = {
        title :'My Product',
        description : 'Any Product Description',
        price : 1500,
        category : 'any Product Category',
        image: 'https://Some-image.jpg'
      }
      this.service.CreateProduct(product)
      .subscribe({
        next: (result : ProductRepresentation) => {
          console.log(result);
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
