import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SearchComponent } from './search/search.component'




@NgModule({
  declarations: [AppComponent, NavBarComponent, SearchComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    AppRoutingModule,  
    Ng2SearchPipeModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
