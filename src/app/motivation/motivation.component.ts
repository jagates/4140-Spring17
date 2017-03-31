import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.scss']
})
export class MotivationComponent implements OnInit {
  newGoal: string = '';
  tiles = [
    {text: 'Daily Goals', cols: 2, rows: 3, color: 'lightblue'},
    {text: 'Progress', cols: 2, rows: 3, color: 'lightgreen'},
    {text: 'Notifications', cols: 2 , rows: 3, color: 'violet'},
    {text: 'Events', cols: 2 , rows: 3, color: 'blanchedalmond'},
    {text: 'Interests', cols: 4 , rows: 3, color: 'lightpink'},
  ];

  events = [
    {title: 'Cooper River Bridge Run - 10k', date: '1/1/17', description: 'The Cooper River Bridge Run provides a world-class 10-K foot race. The race promotes continuous physical activity and a healthy lifestyle through education and opportunity.'},
    {title: 'Cooper River Bridge Run - 10k', date: '1/1/17', description: 'The Cooper River Bridge Run provides a world-class 10-K foot race. The race promotes continuous physical activity and a healthy lifestyle through education and opportunity.'},

  ];

  interests = [
    {title: '10 Quick Paleo Breakfasts', avatar: 'breakfast.jpg', source: 'eathealthy.com', upvotes: '1.5k', description: 'New recipes from Jillian for on-the-go Paleo dieters ...', liked: false},
    {title: 'What Time of Day Should You Run?', avatar: 'run.jpg', source: 'runninglife.com', upvotes: '1.2k', description: 'New studies show you how to get the most out of your run ...', liked: false},
    {title: 'How Paleo Improves Your Liver', avatar: 'liver.jpg', source: 'paleofoodies.com', upvotes: '1.2k', description: 'Dr. Richard Feinbaum explains how your liver is dependent on protein ...', liked: false},
    {title: 'That Sugar Film!', avatar: 'sugarfilm.jpg', source: 'netflix.com', upvotes: '1.1k', description: 'Damon Gameau embarks on a unique experiment to document the effects of a high ...', liked: false},
    {title: 'Cardio Before or After Weightlifting?', avatar: 'cardio.jpg', source: 'buildingbody.com', upvotes: '1.0k', description: 'Our experts explain the primetime to run for mass ...', liked: false}

  ];

  goals:string[] = [
    'Go for a run',
    'Eat less than 2300 calories',
    'Drink 3L of water'
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

  toggleLike(index: number): void {
    this.interests[index].liked = !this.interests[index].liked;
  }
}
