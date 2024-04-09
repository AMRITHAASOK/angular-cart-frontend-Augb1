import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  products:any[]=[]//To hold cart product

  ngOnInit(): void {
    this.getCartProduct()
  }
  constructor(private api:ApiService){}

  getCartProduct(){
    this.api.getCart().subscribe({
      next:(res:any) => {
        console.log(res);
        this.products = res
      },
    error:(err=>{
      console.log(err);
      
    })
    })
  }
}
