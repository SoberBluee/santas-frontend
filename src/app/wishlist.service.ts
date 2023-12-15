import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import WishListItem, { WishListResponse } from './interfaces/wishlist-item.interface';
import { Observable } from 'rxjs';

enum AuthEnum {
  apiUrl = 'http://localhost:5173/api'
}

@Injectable({
  providedIn: 'root'
})

export class WishlistService {

  constructor(private http:HttpClient) { }

  public addItem(payload: WishListItem): Observable<WishListResponse> {
    return this.http.post<WishListResponse>(AuthEnum.apiUrl + '/christmas-list', payload);
  }

  public removeItem(payload: WishListItem): Observable<WishListResponse> {
    return this.http.post<WishListResponse>(AuthEnum.apiUrl + '/', payload);
  }

  public editItem(payload: WishListItem): Observable<WishListResponse> {
    return this.http.post<WishListResponse>(AuthEnum.apiUrl + '/christmas-list', payload);
  }
}
