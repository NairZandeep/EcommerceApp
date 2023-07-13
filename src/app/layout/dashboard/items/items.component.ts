import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/service/api.service';
import { CartService } from 'src/app/service/service/service/cart.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public itemList:any;
  constructor(private api :ApiService, private cartService :CartService) {}
  
  ngOnInit(): void {
    this.api.getproduct()
    .subscribe(res=>{
      this.itemList=res;

      
      this.itemList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
        
      });
    })
  }
  addtocart(item: any){
    this.cartService.addToCart(item);
  }


}