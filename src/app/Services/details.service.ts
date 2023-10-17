import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

let httpOptions = {};

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  getDrinkDetailsService(drink: string): Observable<any> {
    return this.http.get<any>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink, httpOptions)
  }
}
