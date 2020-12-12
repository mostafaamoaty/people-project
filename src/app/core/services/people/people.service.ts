import { Injectable } from '@angular/core';
import { User } from '../../../shared/models/user';
import { PEOPLE } from '../../../shared/mocks/people';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor() {}

  getPeople(): User[] {
    return PEOPLE;
  }
}
