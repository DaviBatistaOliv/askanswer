import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { FieldsModule } from '../fields/fields.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    SidebarComponent, //
  ],
  imports: [
    CommonModule, //
    FieldsModule,
    FontAwesomeModule,
  ],
  exports: [
    SidebarComponent, //
  ],
})
export class SidebarModule {}
