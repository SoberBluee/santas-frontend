export default interface WishListItem{
  name: string
}

export interface WishListResponse{
  id: number;
  letter_content: string;
  christmas_list: ChristmasListItem[];
}

export interface ChristmasListItem{
  id: number;
  name: string;
  price: number;
  rating: number;
}
