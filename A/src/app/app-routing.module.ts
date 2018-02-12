import {NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoaderComponent} from './loader/loader.component';
import {DashboardComponent } from './dashboard/dashboard.component';
import {BuyComponent} from './buy/buy.component';
import {SaleComponent} from './sale/sale.component';
import {MarketSummaryComponent} from './market-summary/market-summary.component';
import {OrderHistoryComponent} from './order-history/order-history.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
    {path:'',redirectTo: '/order-history',pathMatch: 'full'},
    {path:'login',component:LoginComponent},
    {path:'order-history',component:OrderHistoryComponent},
    {path:'buy',component:BuyComponent},
    {path:'sell',component:SaleComponent},
    {path:'**',redirectTo: '/order-history',pathMatch: 'full'}
    ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[AppComponent,HeaderComponent,DashboardComponent,LoaderComponent,
    FooterComponent,MarketSummaryComponent,OrderHistoryComponent,BuyComponent,SaleComponent,LoginComponent
 ];  


