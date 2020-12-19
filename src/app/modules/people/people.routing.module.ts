import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people.component';
import { FullTimersComponent } from './components/full-timers/full-timers.component';
import { AllPeopleComponent } from './components/all-people/all-people.component';
import { PartTimersComponent } from './components/part-timers/part-timers.component';

const routes: Routes = [
  {
    path: 'people',
    component: PeopleComponent,
    children: [
      { path: '', component: AllPeopleComponent },
      {
        path: 'full-timers',
        component: FullTimersComponent,
      },
      { path: 'part-timers', component: PartTimersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}
