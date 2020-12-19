import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css'],
})
export class ProfileDataComponent implements OnInit {
  @Input() profile: User | undefined;

  constructor() {}

  ngOnInit(): void {}
}
