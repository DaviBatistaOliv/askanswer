import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalLayoutComponent } from './internal-layout.component';

const routes: Routes = [{ path: '', component: InternalLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalLayoutRoutingModule { }
