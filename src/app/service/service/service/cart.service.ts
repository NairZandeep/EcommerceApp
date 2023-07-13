import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any=[]
  public itemList= new BehaviorSubject<any>([]);


  constructor() { }

  getItems(){
    return this.itemList.asObservable();

  }

  setproduct(item:any){
    this.cartItemList.push(...item);
    this.itemList.next(item);
  }

  addToCart(item:any){
    this.cartItemList.push(item);
    this.itemList.next(this.cartItemList);
    this.gettotalprice();

    console.log(this.cartItemList)

  }
  gettotalprice() :number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
  }
  removeAll(){
    this.cartItemList =[]
    this.itemList.next(this.cartItemList);
  }
}
