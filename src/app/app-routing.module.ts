import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './modules/auth/registration/registration.component';
import { LoginComponent } from './modules/auth/login/login.component';

const routes: Routes = [
  {path:'admin/login',component:LoginComponent},
  {path:'user/registration',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
