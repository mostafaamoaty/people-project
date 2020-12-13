import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/core/services/people/people.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-part-timers',
  templateUrl: './part-timers.component.html',
  styleUrls: ['./part-timers.component.css'],
})
export class PartTimersComponent implements OnInit {
  partTimers!: User[];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.getPartTimers();
  }

  getPartTimers() {
    this.partTimers = this.peopleService.getPeople().filter((fullTimer) => {
      return fullTimer.group === 'Part-Time';
    });
  }
}
