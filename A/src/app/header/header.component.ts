import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationStart} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers:[],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
 
  islogin=false;
  user:any;

  ngOnInit() {
      this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe(event => {
        var token=localStorage.getItem('bittrex_auth_key');
        this.user=JSON.parse(localStorage.getItem('bittrex_loggedinuser'));
        if(token)
            this.islogin=true;
        else
          this.islogin=false;
      });

  }

  Logout()
  {
    localStorage.removeItem('bittrex_auth_key');
    localStorage.removeItem('bittrex_loginuser');
    localStorage.removeItem('bittrex_loggedinuser');
    this.router.navigate(["login"]);
  }

}
