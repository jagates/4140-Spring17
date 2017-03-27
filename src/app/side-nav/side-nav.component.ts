import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

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
  {title: 'Events', reference: 'events', icon: 'event'}
];

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  selectedItem: NavItem;
  navItems = NAVITEMS;

  constructor(public dialog: MdDialog) {}

  openDialog() {
    let dialogRef = this.dialog.open(settingsDialog, {
      height: '400px',
      width: '600px'
    });
    
  }

  onSelect(navItem: NavItem): void {
    this.selectedItem = navItem;
  }

  ngOnInit() {
    this.selectedItem = this.navItems[0];
  }
}

@Component({
  selector: 'settings-Dialog',
  templateUrl: '../settingsDialog.html',
})
export class settingsDialog {
  constructor(public dialogRef: MdDialogRef<settingsDialog>) {}
}