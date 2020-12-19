import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { ProfileDataComponent } from './components/profile-data/profile-data.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

@NgModule({
  declarations: [ProfileComponent, ProfileDataComponent, EditProfileComponent],
  imports: [SharedModule, UserRoutingModule, CommonModule, FormsModule],
})
export class UserModule {}
