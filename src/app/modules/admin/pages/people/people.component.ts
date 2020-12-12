import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../../shared/models/user';
import { PeopleService } from '../../../../core/services/people/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  @Output() people: User[] | undefined;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {
    this.people = this.peopleService.getPeople();
  }
}
