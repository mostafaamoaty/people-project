import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {
  selectedClass!: string;
  @Output() selectedGroup = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onSelect(group: string) {
    this.selectedClass = group;
    this.selectedGroup.emit(group);
  }
}
