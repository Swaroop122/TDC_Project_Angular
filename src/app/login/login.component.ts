import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormControl,Validators} from '@angular/forms';
import { LoginService } from '../login.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginorhome:boolean=true;
  Users;
  Products;
  msg:string="";
  flag:string="invalid";
  public Logindetails:FormGroup;

  constructor(private Loginserv:LoginService,private pserv:ProductService) { 
    this.Logindetails=new FormGroup({
      uname:new FormControl('',Validators.required),
      pass:new FormControl('',Validators.required)
    });
  }

  ngOnInit(): void {
    this.Loginserv.getLogin().subscribe((data)=>{ this.Users=data;});
    this.pserv.getProd().subscribe((pdata)=>{this.Products=pdata;});
  }

  Login()
  {
    for(let i=0;i<this.Users.length;i++)
    {
      if((this.Logindetails.value.uname==this.Users[i].username) && (this.Logindetails.value.pass==this.Users[i].password) )
          {
            this.loginorhome=false;
            this.msg="";
            this.flag="valid";
            break;
          }
    }
    if(this.flag=="invalid")
    { 
      this.loginorhome=true;
      this.msg="Invalid Login Details";
    }
  }
 Prod=[];
  Gettotal()
  {
      this.Prod=this.pserv.getP();
      let total:number=0;
      for(let i=0;i<this.Prod.length;i++)
      {
        if(this.Prod[i].count>0)
        {
         total+=this.Prod[i].count*this.Prod[i].price;
        }

      }
      return total;
     
    }
}
