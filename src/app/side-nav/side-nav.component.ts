import { Component, OnInit } from '@angular/core';

export class NavItem {
  title: string;
  reference: string;
}

const NAVITEMS: NavItem[] = [
  {title: 'Motivation', reference: 'motivation'},
  {title: 'Goals', reference: 'goals'},
  {title: 'Interests', reference: 'interests'},
  {title: 'Groups', reference: 'groups'},
  {title: 'People', reference: 'people'},
  {title: 'Events', reference: 'events'},
  {title: 'Settings', reference: 'settings'}
];

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  selectedItem: NavItem;
  navItems = NAVITEMS;

  onSelect(navItem: NavItem): void {
    this.selectedItem = navItem;
  }

  constructor() {
  }

  ngOnInit() {
    this.selectedItem = this.navItems[0];
  }
}
