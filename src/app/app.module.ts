import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import{ LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ToysComponent } from './toys/toys.component';
import { FashionComponent } from './fashion/fashion.component';
import { AutomobileComponent } from './automobile/automobile.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    ElectronicsComponent,
    ToysComponent,
    FashionComponent,
    AutomobileComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpClientModule,RouterModule.forRoot([
      {path:'home',component:LoginComponent,children:[{path:'toys',component:ToysComponent},
      {path:'electronics',component:ElectronicsComponent},
      {path:'fashion',component:FashionComponent},
      {path:'automobile',component:AutomobileComponent}]},
      
      {path:'',redirectTo:'/home',pathMatch:'full'},
      {path:'**',component:PagenotfoundComponent},
    ])
  ],
  providers: [LoginService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
