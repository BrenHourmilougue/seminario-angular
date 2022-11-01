import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../article-list/article';
import { tap } from 'rxjs/operators';

const URL = "https://636029003e8f65f283c4b46b.mockapi.io/articles/articles";

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {

  constructor(private http :HttpClient) { }
  public getAll(): Observable<Product[]>{

    return this.http.get<Product[]>(URL)
              .pipe(
                tap((products : Product[])=> products.forEach(product =>product.quantity=0))
              );
  }
}
