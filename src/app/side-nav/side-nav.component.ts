import { Component, OnInit } from '@angular/core';

export class NavItem {
  title: string;
  reference: string;
  icon: string;
}

const NAVITEMS: NavItem[] = [
  {title: 'Motivation', reference: 'motivation', icon: 'thumb_up'},
  {title: 'Goals', reference: 'goals', icon: 'trending_up'},
  {title: 'Interests', reference: 'interests', icon: 'favorite'},
  {title: 'Groups', reference: 'groups', icon: 'group_work'},
  {title: 'People', reference: 'people', icon: 'face'},
  {title: 'Events', reference: 'events', icon: 'event'},
  {title: 'Settings', reference: 'settings', icon: 'settings'}
];

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
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
