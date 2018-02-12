import { Component,OnInit,Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import {BittrexDetailService} from '../services/bittrex.service'

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  providers:[BittrexDetailService],
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  submitText='+ Buy Verge';
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

  BuyCrypto()
  {
    if(this.submitText=='+ Buy Verge')
    {
      this.submitText='Please wait..'
        this.bittrexDetailService.BuyLimit(this.buyLimit).subscribe(data=>
          {
          if(data.success)
            alert('Order Sucess Fully Placed ! ');
            
            this.submitText='+ Buy Verge';
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
