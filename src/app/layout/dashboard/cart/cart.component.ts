import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/service/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product : any =[];
  public grandTotal !: number ;

  constructor(private cartService :CartService){}

  ngOnInit(): void {
    this.cartService.getItems()
    .subscribe(res=>{
      this.product =res;
      this.grandTotal=this.cartService.gettotalprice();
    })    
  }
  removeItem(item :any){
    this.cartService.removeCartItem(item)
  }
  emptycart(){
    this.cartService.removeAll();
  }

}
