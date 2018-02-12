
import { Injectable } from '@angular/core';
//import { UUID } from 'angular2-uuid';

@Injectable()
export class ConfigService {

    _apiURI : string;

    _token:string;

    constructor() {
       // this._apiURI = 'http://localhost:3000/';
       this._apiURI = '/';
     }

     getApiURI() {
         return this._apiURI;
     }

     getAuthURL() {
        return this._apiURI.replace('api','auth');
    }

     getApiHost() {
         return this._apiURI.replace('api/','');
     }
     getApiAuthURL() {
         return this._apiURI.replace('/api/','');
     }


}
