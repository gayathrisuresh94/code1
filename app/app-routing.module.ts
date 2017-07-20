import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';




const routes :Routes=[

    {path: '', component: WelcomeComponent,pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
     {path: 'product-list', component: ProductListComponent},
    { path: '**', component: LoginComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]

})
export class RoutingModule { }







