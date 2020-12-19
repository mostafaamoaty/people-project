import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemStatusComponent } from './system-status/system-status.component';

@NgModule({
  declarations: [SystemStatusComponent],
  imports: [CommonModule],
  exports: [SystemStatusComponent],
})
export class SharedModule {}
