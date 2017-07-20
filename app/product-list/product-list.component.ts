import { Component, OnInit } from '@angular/core';
import { Product } from './products';

// We haven't defined these services yet

import { ProductService } from './productservice';

@Component({
  selector: 'app-product-list',
  // We'll use an external file for both the CSS styles and HTML view
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title:string = 'Products list';
  errorMessage: string;
  productList: Product[];

  // Note: We haven't implemented the Deal or Auth Services yet.
  constructor(private productService: ProductService) {
  }
  // When this component is loaded, we'll call the dealService and get our public deals.
  ngOnInit(): void {
    this.productService.getProducts()
                .subscribe(products => this.productList = products,
                           error => this.errorMessage = <any>error);
  }

  purchase(item){
    alert("You bought the: " + item.name);
  }
}