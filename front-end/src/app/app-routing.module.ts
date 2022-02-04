import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', //
    loadChildren: () =>
      import('./pages/authentication/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/authentication/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/internal-layout/internal-layout.module').then(
        (m) => m.InternalLayoutModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
