import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gtd-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {

  users: { id: number, name: string, title: string  }[] = [
    { id: 1, name: 'Carla Espinosa', title: '150 metros' },
    { id: 2, name: 'Bob Kelso', title: '50 metros' },
    { id: 3, name: 'Janitor', title: '50 metros' },
    { id: 4, name: 'Perry Cox', title: '50 metros' },
    { id: 5, name: 'Ben Sullivan', title: '50 metros' },
    { id: 6, name: 'Ben Sullivan', title: '50 metros' },
    { id: 7, name: 'Ben Sullivan', title: '50 metros' },
    { id: 9, name: 'Ben Sullivan', title: '50 metros' },
    { id: 10, name: 'Ben Sullivan', title: '50 metros' },
  ];

  constructor() { }

  ngOnInit() {
  }

  gps(id: any) {
    console.log(id);
  }
}
