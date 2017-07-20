import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Product } from './products';

@Injectable()
export class ProductService {
  // Define the routes we are going to interact with
  private productsUrl = 'http://localhost:3001/api/products';
 
  constructor(private http: Http) { }

  // Implement a method to get the public deals

getProducts(): Observable<Product[]> {
    return this.http.get(this.productsUrl)
        .map((response: Response) => <Product[]> response.json())
        .do(data => console.log('All: ' +  JSON.stringify(data)))
        .catch(this.handleError);
}

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}