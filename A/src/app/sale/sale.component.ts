import { Component, OnInit } from '@angular/core';
import {BittrexDetailService} from '../services/bittrex.service'

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  providers:[BittrexDetailService],
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  submitText='- Sell Verge';
  buyLimit={Market: 'BTC-XVG',Quantity: 0,Rate: 0.0};
  totalAmount="";
  currentBalance:any;
  currentmarket:any;
  constructor(private bittrexDetailService:BittrexDetailService) { 
    
  }

  ngOnInit() {

    debugger;
    this.bittrexDetailService.GetBalance().subscribe(data=>{
      this.currentBalance=data;
    });
    this.GetMinimumUnitFirst();
    
  }

  SellCrypto()
  {
    if(this.submitText=='- Sell Verge')
    {
      this.submitText='Please wait..'
      this.bittrexDetailService.SellLimit(this.buyLimit).subscribe(data=>
        {
        if(data.success)
          alert('Order Sucess Fully Placed ! ');

          this.submitText='- Sell Verge';
        }
      );
  }
  }

  CalculateTotal()
  {
    this.totalAmount=(this.buyLimit.Rate*this.buyLimit.Quantity).toFixed(8);
  }

  GetMinimumUnit()
  {
     debugger;
     let minimumPurchaseQuantity=  (0.00050000/this.buyLimit.Rate);
     if(this.buyLimit.Quantity<minimumPurchaseQuantity)
      {
        alert('Trade Disallowed. Min Quantity Should be equal to or greator than '+minimumPurchaseQuantity );
        this.buyLimit.Quantity=minimumPurchaseQuantity;
      }
      this.totalAmount=(this.buyLimit.Rate*this.buyLimit.Quantity).toFixed(8);

      if(this.totalAmount>this.currentBalance.result.Balance)
      {
        alert('Insufficient amount in your wallets : '+this.currentBalance.result.Balance +' BTC' );
        this.GetMinimumUnitFirst();
      }
  }

  GetMinimumUnitFirst()
  {
     debugger;
     this.bittrexDetailService.GetMarketSummary().subscribe(data=>
      {
        this.currentmarket=data;
        this.buyLimit.Rate=this.currentmarket.result[0].Last.toFixed(8);
        let minimumPurchaseQuantity=  (0.00050000/this.buyLimit.Rate);
        this.buyLimit.Quantity=minimumPurchaseQuantity;
        if(this.buyLimit.Quantity<minimumPurchaseQuantity)
         {
          // alert('Trade Disallowed. Min Quantity Should be equal to or greator than '+minimumPurchaseQuantity );
           this.buyLimit.Quantity=minimumPurchaseQuantity;
         }
         this.totalAmount=(this.buyLimit.Rate*this.buyLimit.Quantity).toFixed(8);   
      });
    
  }

}
