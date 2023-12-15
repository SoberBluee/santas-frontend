import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishlistService } from '../wishlist.service';
import { WishListResponse } from '../interfaces/wishlist-item.interface';

@Component({
  selector: 'app-santas-list',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './santas-list.component.html',
  styleUrl: './santas-list.component.scss'
})

export class SantasListComponent {
  wishlistTitle = 'My Wishlist';
  public itemName = '';
  wishlist: { name: string }[] = [];
  editingIndex = -1;

  constructor(private wishlistService: WishlistService){}

  public addItem() {
    this.wishlistService.addItem({name: this.itemName})
    .subscribe((response: WishListResponse) => {
      console.log(response);
    });
  }

  public editItem(index: number) {
    this.itemName = this.wishlist[index].name;
    this.editingIndex = index;
  }

  public deleteItem(index: number) {
    this.wishlist.splice(index, 1);
  }
}
