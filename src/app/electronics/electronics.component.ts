import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
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
