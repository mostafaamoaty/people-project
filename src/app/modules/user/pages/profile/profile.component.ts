import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile!: User;
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.profile = this.profileService.getProfile();
  }
}
