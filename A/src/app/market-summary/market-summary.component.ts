import { Component, OnInit } from '@angular/core';
import {BittrexDetailService} from '../services/bittrex.service'

@Component({
  selector: 'app-market-summary',
  templateUrl: './market-summary.component.html',
  providers:[BittrexDetailService],
  styleUrls: ['./market-summary.component.css']
})
export class MarketSummaryComponent implements OnInit {

  marketSummary=[];
  currentmarket=[];
  constructor(private bittrexDetailService:BittrexDetailService) { }

  ngOnInit() {
    this.bittrexDetailService.GetMarketSummaries().subscribe(data=>this.marketSummary=data);
    this.bittrexDetailService.GetMarketSummary().subscribe(data=>this.currentmarket=data);

  }

}
