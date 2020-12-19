import { Injectable } from '@angular/core';
import { User } from '../../../shared/models/user';
import { PEOPLE } from '../../../shared/mocks/people';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  getProfile(): User {
    return PEOPLE[0];
  }
}
