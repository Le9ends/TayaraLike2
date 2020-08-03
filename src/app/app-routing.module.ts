import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes=[
  {path:'home', component:HomeComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'profile', component:ProfileComponent},
  {path:'search', component:SearchComponent},
  {path:'immovable', component:ImmovableComponent},
  {path:'vehicle', component:VehicleComponent},
  {path:'multimedia', component:MultimediaComponent},
  {path:'gardens', component:GardensComponent},
  {path:'leisure', component:LeisureComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
