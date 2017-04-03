import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  newGoal: string = '';
  newGoal2: string = '';


  tiles = [
    {text: 'Daily Goals', cols: 4, rows: 3, color: 'lightblue'},
    {text: 'Progress', cols: 4, rows: 3, color: 'lightblue'},
    //{text: '', cols: 4, rows: 3, color: 'lightblue'},

  ];

  goals:string[] = [
    'Enter body weight',
    'Go for a run',
    'Eat less than 2300 calories',
  ];

  goals2:string[] = [
    'Continue Paleo Diet',
    'Get a six pack',
    'Bench 215 LBS',
  ];


  constructor() { }

  ngOnInit() {
  }

  addNewGoal():void {
    if(this.newGoal.length > 0) {
      this.goals.push(this.newGoal);
      this.newGoal = '';
    }
  }
  removeGoal(index: number):void {
    console.log("Goal: " + this.goals[index]);
    this.goals.splice(index,1);
    console.log(this.goals);
  }
  addNewGoal2():void {
    if(this.newGoal2.length > 0) {
      this.goals2.push(this.newGoal2);
      this.newGoal2 = '';
    }
  }
  removeGoal2(index: number):void {
    console.log("Goal: " + this.goals2[index]);
    this.goals2.splice(index,1);
    console.log(this.goals2);
  }

}
