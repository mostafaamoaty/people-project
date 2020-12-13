import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/core/services/people/people.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-full-timers',
  templateUrl: './full-timers.component.html',
  styleUrls: ['./full-timers.component.css'],
})
export class FullTimersComponent implements OnInit {
  fullTimers!: User[];
  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.getFullTimers();
  }

  getFullTimers() {
    this.fullTimers = this.peopleService.getPeople().filter((fullTimer) => {
      return fullTimer.group === 'Full-Time';
    });
  }
}
