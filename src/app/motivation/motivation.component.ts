import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.scss']
})
export class MotivationComponent implements OnInit {

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
    {title: '10 Quick Paleo Breakfasts', avatar: 'breakfast.jpg', source: 'eathealthy.com', upvotes: '1.5k', description: 'New recipes from Jillian for on-the-go Paleo dieters ...'},
    {title: 'What Time of Day Should You Run?', avatar: 'run.jpg', source: 'runninglife.com', upvotes: '1.2k', description: 'New studies show you how to get the most out of your run ...'},
    {title: 'How Paleo Improves Your Liver', avatar: 'liver.jpg', source: 'paleofoodies.com', upvotes: '1.2k', description: 'Dr. Richard Feinbaum explains how your liver is dependent on protein ...'},
    {title: 'That Sugar Film!', avatar: 'sugarfilm.jpg', source: 'netflix.com', upvotes: '1.1k', description: 'Damon Gameau embarks on a unique experiment to document the effects of a high ...'},
    {title: 'Cardio Before or After Weightlifting?', avatar: 'cardio.jpg', source: 'buildingbody.com', upvotes: '951', description: 'Our experts explain the primetime to run for mass ...'}

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
