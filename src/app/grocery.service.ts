import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor(private http:HttpClient) {}

  fetchAllGroceries(){
    return this.http.get("http://localhost:5000/groceries")
  }
}
