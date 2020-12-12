import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.css'],
})
export class SystemStatusComponent implements OnInit {
  status: String[] = ['Green', 'Yellow', 'Red'];
  selectedStatus: String = '';

  constructor() {}

  ngOnInit(): void {}

  getServerStatus() {
    this.selectedStatus = this.status[
      Math.floor(Math.random() * this.status.length)
    ];
    return this.selectedStatus;
  }
}
