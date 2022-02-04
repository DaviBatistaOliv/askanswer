import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule } from '@angular/material/card';
import { DateTimelinePipe } from './pipes/date-timeline/date-timeline.pipe';

@NgModule({
  declarations: [DateTimelinePipe],
  imports: [
    CommonModule, //
  ],
  exports: [
    FontAwesomeModule, //
    MatCardModule,
    DateTimelinePipe,
  ],
})
export class SharedModule {}
