import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {

  
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
