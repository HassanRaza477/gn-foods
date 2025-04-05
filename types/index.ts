
export interface CartItem {
  id: string;  
  _id: string;
  image: string;
  name: string;
  price: string | number;
  quantity: number;
}

export interface MenuItem {
  _id: string;
  name: string;
  price: number;
  description?: string;
  image: string;
}