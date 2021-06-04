import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as config from './config/config.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUri: string = config.BASE_URI;
  constructor(private http: HttpClient) { }
  get(path) {
    return this.http.get(this.baseUri + path);
  }
  post(path, data){
    return this.http.post(this.baseUri + path, data);
  }
}
