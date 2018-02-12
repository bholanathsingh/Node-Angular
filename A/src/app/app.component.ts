import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationStart} from '@angular/router';


@Component({
  selector: 'app-root',
  providers:[],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  islogin=false;

  constructor(private router:Router){}

  ngOnInit() {
    this.router.events
    .filter(event => event instanceof NavigationStart)
    .subscribe(event => {
      this.islogin=false;
      if(event instanceof NavigationStart ){
        if(event.url!='/login')
        {
          var token=  localStorage.getItem('bittrex_auth_key');
          if(token)
            this.islogin=true;
          else
          this.router.navigate(["login"]);
        }
      }
    }); 
  }
}
