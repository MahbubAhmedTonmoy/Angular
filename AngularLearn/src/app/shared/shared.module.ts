import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { DropdownDirective } from './dropdown.directive';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports:[
    DropdownDirective,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
