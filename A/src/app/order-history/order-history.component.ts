import { Component, OnInit } from '@angular/core';
import {BittrexDetailService} from '../services/bittrex.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  providers:[BittrexDetailService],
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  message=0;
  orderHistory=null;
  openOrderHistory=null;
  constructor(private bittrexDetailService:BittrexDetailService) {

    // Observable.interval(500)
    // .take(100).map((x) => x+1)
    // .subscribe((x) => { this.message = x; });

    Observable.interval(3500).subscribe(() => { 
      //this.message=Math.floor(Math.random() * 100) + 1;
      this.bittrexDetailService.GetOrderHistory().subscribe(data=>this.orderHistory=data);
      this.bittrexDetailService.GetOpenOrders().subscribe(data=>this.openOrderHistory=data);
     });

   }

  ngOnInit() {
    this.bittrexDetailService.GetOrderHistory().subscribe(data=>this.orderHistory=data);
    this.bittrexDetailService.GetOpenOrders().subscribe(data=>this.openOrderHistory=data);
  }

}
