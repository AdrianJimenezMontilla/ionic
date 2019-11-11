import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  private item: any;

  constructor(private service: ItemService,
              private router: Router) {
   }

   ngOnInit() {
    this.item = {};
    this.item.item = "";
    this.item.price = 0;
    this.item.quantity = 0;
   }

  saveItem() {
    this.item.subtotal = this.item.price * this.item.quantity;
    this.service.addItem(this.item);
    this.router.navigateByUrl('/home');
  }
}