import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyapiService {

  constructor(private http: HttpClient) { }
  url = 'https://my-json-server.typicode.com/kajal23-maker/myAPI/users';
  getData(){
    return this.http.get(this.url);
  }
}
