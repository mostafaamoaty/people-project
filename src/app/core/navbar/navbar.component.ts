import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people/people.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  numberOfPeople: number | undefined;
  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.getNumberOfPeople();
  }

  getNumberOfPeople() {
    this.numberOfPeople = this.peopleService.getPeople().length;
  }
}
