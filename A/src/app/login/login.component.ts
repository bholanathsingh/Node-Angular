import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={username:"",password:""};
  logintext='Sign In';
  errmsg='';
  constructor(private router:Router) { }

  ngOnInit() {
    var token=  localStorage.getItem('bittrex_auth_key');
    if(token)
    this.router.navigate(["order-history"]);
  }

Login(){
    this.logintext='Please Wait .....';
    this.errmsg ='';
    if(this.user.username==='admin@gmail.com' && this.user.password==='admin@gmail.com')
    {
      let loddeduser={success:'true',message: 'Enjoy your token!',user:{'username':'Admin','email':'admin@gmail.com',displayName:'Admin',phonenumber:'9990009990'},token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ImJob2xhbmF0aHNpbmdoQGdtYWlsLmNvbSIsImlhdCI6MTUxMDY1MDQzMSwiZXhwIjoxNTEwNjY0ODMxfQ.CLaU1jEORuxuleerWoFzwMRtGmbRh316y8CNjYqa3PI'};
      localStorage.setItem('bittrex_loginuser', JSON.stringify(this.user));
      localStorage.setItem('bittrex_loggedinuser', JSON.stringify(loddeduser.user));
      localStorage.setItem('bittrex_auth_key',loddeduser.token);
      this.router.navigate(["order-history"]);
    }
    else
    {
      this.logintext='Sign In';
      alert("enter correct user and password ");
    }
}

ClearField(){
  this.user.username='';
  this.user.password='';
}

}
