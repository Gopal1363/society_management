import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ProfileComponent } from '../app/profile/profile.component'
import { LoginComponent } from '../app/login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import {AuthenticationService} from '../authentication.service'
import { AuthGuardService } from '../auth-guard.service';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AddVehicleComponent } from './vehicle/add-vehicle/add-vehicle.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile',component: ProfileComponent,canActivate: [AuthGuardService]},
  {path: 'vehicle',component: VehicleComponent, pathMatch: 'prefix', children:[
    {path: 'addvehicle', component: AddVehicleComponent}
  ]}

  
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    VehicleComponent,
    AddVehicleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
