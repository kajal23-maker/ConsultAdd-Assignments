import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  check:boolean = true;
  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
