import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  stock;
  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {}

  getInStock() {
    this.inventoryService.getItems().subscribe((res) => {
      this.stock = res;
    });
  }

}
