import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'weather-component', component: WeatherComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }