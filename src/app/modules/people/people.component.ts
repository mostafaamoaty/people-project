import { Component, Input, OnInit, Output } from '@angular/core';
import { PeopleService } from 'src/app/core/services/people/people.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
