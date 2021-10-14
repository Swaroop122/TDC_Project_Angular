import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string="http://localhost:4200/../assets/products.json";
  
  constructor(private http:HttpClient) { }

  getProd()
  {
    return this.http.get(this.url);
  }

 prods=[];
 flag:string="0";
 Add(p)
 {
   for(let i=0;i<this.prods.length;i++)
   {
     if(this.prods[i]==p)
     {
       this.prods[i].count+=1;
       this.flag="1";
     }
   }
   if(this.flag=="0")
        {
          p.count+=1;
          this.prods.push(p);
        }
        this.flag="0";
        console.log(this.prods);
    
    

 }

 getP()
 {
   return this.prods;
 }
}
