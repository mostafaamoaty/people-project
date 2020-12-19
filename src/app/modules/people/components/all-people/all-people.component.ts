import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { PeopleService } from 'src/app/core/services/people/people.service';

@Component({
  selector: 'app-all-people',
  templateUrl: './all-people.component.html',
  styleUrls: ['./all-people.component.css'],
})
export class AllPeopleComponent implements OnInit {
  people!: User[];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {
    this.people = this.peopleService.getPeople();
  }
}
