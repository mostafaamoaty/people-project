import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PeopleComponent } from './people.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PeopleRoutingModule } from './people.routing.module';
import { FullTimersComponent } from './components/full-timers/full-timers.component';
import { PartTimersComponent } from './components/part-timers/part-timers.component';
import { AllPeopleComponent } from './components/all-people/all-people.component';

@NgModule({
  declarations: [PeopleComponent, SideMenuComponent, FullTimersComponent, PartTimersComponent, AllPeopleComponent],
  imports: [CommonModule, SharedModule, PeopleRoutingModule],
})
export class PeopleModule {}
