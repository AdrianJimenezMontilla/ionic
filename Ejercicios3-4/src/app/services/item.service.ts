import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items: Item[];

  constructor() {
    this.items = [
      {
        "item": "Teclado Logitech",
        "price": 16.40,
        "quantity": 2
      },
      {
        "item": "Ratón Tacens",
        "price": 10.25,
        "quantity": 3
      },
      {
        "item": "Portátil MSI",
        "price": 999,
        "quantity": 1
      },
      {
        "item": "Tablet Lenovo",
        "price": 139,
        "quantity": 2
      }
    ]
    this.items.forEach(i => i.subtotal = i.price * i.quantity)
  }

  getItems(): Item[] {
    return this.items;
  }

  getItemByName(name: string): Item {
    return this.items.find(item => item.item == name);
  }

  addItem(item: Item) {
    this.items.push(item);
  }
}
