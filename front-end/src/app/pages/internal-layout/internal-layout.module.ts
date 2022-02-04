import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '@ui/navbar/navbar.module';
import { SidebarModule } from '@ui/sidebar/sidebar.module';
import { InternalLayoutRoutingModule } from './internal-layout-routing.module';
import { InternalLayoutComponent } from './internal-layout.component';

@NgModule({
  declarations: [InternalLayoutComponent],
  imports: [
    CommonModule,
    InternalLayoutRoutingModule,
    NavbarModule,
    SidebarModule,
  ],
})
export class InternalLayoutModule {}
