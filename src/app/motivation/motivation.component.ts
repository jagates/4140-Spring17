import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.css']
})
export class MotivationComponent implements OnInit {

  tiles = [
    {text: 'Daily Goals', cols: 2, rows: 3, color: 'lightblue'},
    {text: 'Progress', cols: 2, rows: 3, color: 'lightgreen'},
    {text: 'Notifications', cols: 2 , rows: 3, color: 'violet'},
    {text: 'Events', cols: 2 , rows: 3, color: 'blanchedalmond'},
    {text: 'Interests', cols: 4 , rows: 3, color: 'lightpink'},
  ];

  goals = [
    'Go for a run',
    'Eat less than 2300 calories',
    'Drink 3L of water'
  ]
  constructor() { }

  ngOnInit() {
  }

}
