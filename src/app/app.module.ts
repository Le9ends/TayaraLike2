import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { VehicleComponent } from './categoriesComponent/vehicle/vehicle.component';
import { ImmovableComponent } from './categoriesComponent/immovable/immovable.component';
import { MultimediaComponent } from './categoriesComponent/multimedia/multimedia.component';
import { GardensComponent } from './categoriesComponent/gardens/gardens.component';
import { LeisureComponent } from './categoriesComponent/leisure/leisure.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'search', component: SearchComponent },
  { path: 'immovable', component: ImmovableComponent },
  { path: 'vehicle', component: VehicleComponent },
  { path: 'multimedia', component: MultimediaComponent },
  { path: 'gardens', component: GardensComponent },
  { path: 'leisure', component: LeisureComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    SearchComponent,
    ImmovableComponent,
    VehicleComponent,
    MultimediaComponent,
    GardensComponent,
    LeisureComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    Ng2SearchPipeModule

  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
