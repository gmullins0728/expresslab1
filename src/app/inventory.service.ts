import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get("http://localhost:3000/cart-items", {
      responseType: "json"});
  }

  addItems(newItems) {
    return this.http.post("http://localhost:3000/api/cart-items", {
      name: newItems },
      { responseType: "json"}
      );
  }
}
