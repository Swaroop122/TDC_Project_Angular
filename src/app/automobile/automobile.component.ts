import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-automobile',
  templateUrl: './automobile.component.html',
  styleUrls: ['./automobile.component.css']
})
export class AutomobileComponent implements OnInit {
Products;
  constructor(private pserv:ProductService) { }

  ngOnInit(): void {
    this.pserv.getProd().subscribe((pdata)=>{this.Products=pdata;});
  }

  add(obj)
  {
    this.pserv.Add(obj);
  }
}
