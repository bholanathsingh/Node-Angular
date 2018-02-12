import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { ConfigService } from '../shared/utils/config.service';


@Injectable()
export class BittrexDetailService {

    _baseUrl: string = '';
    
    constructor(private http: Http
    ,private configService:ConfigService) { 
        this._baseUrl=configService.getApiURI(); 
     }

    GetOrderHistory() :Observable<any[]> {
        return this.http.get(this._baseUrl+'bittrex/getorderhistory').map((response: Response) => response.json());
    }

    GetOpenOrders() :Observable<any[]> {
        return this.http.get(this._baseUrl+'bittrex/getopenorders').map((response: Response) => response.json());
    }

    GetMarketSummaries() :Observable<any[]> {
        return this.http.get(this._baseUrl+'bittrex/getmarketsummaries').map((response: Response) => response.json());
    }

    GetMarketSummary() :Observable<any[]> {
        return this.http.get(this._baseUrl+'bittrex/getmarketsummary').map((response: Response) => response.json());
    }

    
    GetBalance() :Observable<any[]> {
        return this.http.get(this._baseUrl+'bittrex/getbalance').map((response: Response) => response.json());
    }
    

    BuyLimit(query:any) :Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        let body = query;
        return this.http.post(this._baseUrl+'bittrex/buylimit', body, options).map((res: Response) => res.json());
    }

    SellLimit(query:any) :Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        let body = query;
        return this.http.post(this._baseUrl+'bittrex/selllimit', body, options).map((res: Response) => res.json());
    }
    

    
//     GetCompanyDetailList(query:any) :Observable<any[]> {
//         let headers = new Headers({ 'Content-Type': 'application/json'});
//         let options = new RequestOptions({ headers: headers });
//         let body = query;
//         return this.http.post(this._baseUrl+'companydetail/CompanyDetailslist', body, options).map((res: Response) => res.json());
//    }

   

    // GetCompanyDetailDetail(id:number) :Observable<ICompanyDetail> {
    //     return this.http.get(this._baseUrl+'profile/profiledetail/'+id).map((response: Response) => response.json());
    // }
    
    // AddEnquery(enquerydata:any) :Observable<any[]> {
    //      let headers = new Headers({ 'Content-Type': 'application/json' });
    //      let options = new RequestOptions({ headers: headers });
    //      let body = enquerydata;
    //      return this.http.post(this._baseUrl+'enquiry', body, options).map((res: Response) => res.json());
    // }

    // AddReview(reviewdata:any) :Observable<any[]> {
    //      let headers = new Headers({ 'Content-Type': 'application/json' });
    //      let options = new RequestOptions({ headers: headers });
    //      let body = reviewdata;
    //      return this.http.post(this._baseUrl+'profile', body, options).map((res: Response) => res.json());
    // }

    // UpdateCompanyDetail(progfiledata:any) :Observable<any[]> {
    //      let headers = new Headers({ 'Content-Type': 'application/json' });
    //      let options = new RequestOptions({ headers: headers });
    //      let body = progfiledata;
    //      return this.http.post(this._baseUrl+'profile/updateprofile', body, options).map((res: Response) => res.json());
    // }

    // UpdateCompanyDetailDetail(progfiledetaildata:any) :Observable<any[]> {
    //      let headers = new Headers({ 'Content-Type': 'application/json' });
    //      let options = new RequestOptions({ headers: headers });
    //      let body = progfiledetaildata;
    //      return this.http.post(this._baseUrl+'profile/updateprofiledetail', body, options).map((res: Response) => res.json());
    // }
 
 
}
