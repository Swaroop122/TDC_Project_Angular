import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {

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
