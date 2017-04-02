import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {InterestsBox} from '../interestsBox/interestsBox.component';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {
 
  constructor(public dialog: MdDialog) {}

  wlNews = [
    {title: '10 Celebrity Weight Loss tips',link: "http://www.cosmopolitan.com/health-fitness/a9203591/celebrity-weight-loss-tips-that-actually-work/", avatar: 'cWL.jpg', source: 'cosmopolitan.com', upvotes: '1.5k', description: 'These A-listers are living proof...', liked: false},
    {title: '5 reasons your diet isn\'t working',link: "http://www.today.com/health/why-can-t-i-lose-weight-5-reasons-your-diet-t109834", avatar: 'nWL.jpg', source: 'today.com', upvotes: '1.2k', description: 'Here are five reasons your diet may be doomed...', liked: false},
    {title: 'Best apps for a healthy weight loss',link: "http://www.huffingtonpost.com/entry/best-weight-loss-apps_us_58d95321e4b03787d35ae234", avatar: 'aWL.png', source: 'huffingtonpost.com', upvotes: '1.2k', description: 'an overwhelming amount of technology to help make weight loss easier ...', liked: false},
    {title: 'How to lose and maintain weight loss',link: "http://www.today.com/health/how-lose-maintain-weight-loss-woman-lost-275-pounds-t109432", avatar: 'mWL.jpg', source: 'today.com', upvotes: '1.1k', description: 'The 7 things this woman did to lose — and keep off — 275 pounds ...', liked: false},
    {title: 'Cardio is best for Weight Loss',link: "http://www.huffingtonpost.com/entry/best-weight-loss-apps_us_58d95321e4b03787d35ae234", avatar: 'cWL.png', source: 'cbsmiami.com', upvotes: '1.0k', description: 'Eight-month study which followed 119 overweight volunteers found that cardio was the winner ...', liked: false}

  ];
  pdNews = [
    {title: '10 Quick Paleo Breakfasts', avatar: 'breakfast.jpg', source: 'eathealthy.com', upvotes: '1.5k', description: 'New recipes from Jillian for on-the-go Paleo dieters ...', liked: false},
    {title: 'How Paleo Improves Your Liver', avatar: 'liver.jpg', source: 'paleofoodies.com', upvotes: '1.2k', description: 'Dr. Richard Feinbaum explains how your liver is dependent on protein ...', liked: false},
    {title: 'B.Traits on how Paleo diet keeps her fit', avatar: 'pdk.jpg', source: 'mensjournal.com', upvotes: '1.1k', description: 'It makes me feel stronger as a human being', link: 'http://mixmag.net/feature/b-traits-health-season/', liked: false},
    {title: 'Is the Paleo Diet for You?', avatar: 'pdm.jpg', source: 'mixmag.net', upvotes: '1.0k', description: 'Paleo can be a good way to increase energy, improve gut health, and even lose a few pounds.', link: 'http://www.mensjournal.com/health-fitness/articles/is-the-paleo-diet-for-you-w465200', liked: false},
    {title: 'What is the Paleo diet?', avatar: 'pde.png', source: 'metro.co.uk', upvotes: '9k', description: 'The Paleo diet is based on the premise that we should take our diet back to its simplest form – the diet followed by our earliest ancestors.', link: 'http://metro.co.uk/2017/01/02/what-is-the-paleo-diet-and-what-can-you-eat-6356607/http://metro.co.uk/2017/01/02/what-is-the-paleo-diet-and-what-can-you-eat-6356607/', liked: false}
  ];
  caNews = [
    {title: 'What Time of Day Should You Run?', avatar: 'run.jpg', source: 'runninglife.com', upvotes: '1.2k', description: 'New studies show you how to get the most out of your run ...', liked: false},
    {title: 'Cardio Before or After Weightlifting?', avatar: 'cardio.jpg', source: 'buildingbody.com', upvotes: '1.1k', description: 'Our experts explain the primetime to run for mass ...', liked: false},
    {title: '4 Must-Try Cardio Workouts', avatar: 'cardio.jpg', source: 'webmd.com', upvotes: '1.0k', description: 'You\'re at the gym, ready to do your cardio. Today, don\'t do the exact same thing you always do.', liked: false},
    {title: 'Cardio Workouts: Fix Yours', avatar: 'cwm.jpg', source: 'womenshealth.com', upvotes: '9k', description: 'Think you\'re doing the best cardio workouts and exercises?', liked: false},
    {title: '11 ways to build your cardio workout', avatar: 'cml.jpg', source: 'mensfitness.com', upvotes: '8k', description: 'Stop slogging away in treadmill purgatory.', liked: false}

  ];

  ngOnInit() {
  }

  openEditInterests() {
    let dialogRef = this.dialog.open(InterestsBox, {
      height: '400px',
      width: '600px'
    });
  }

  togglewlLike(index: number): void {
    this.wlNews[index].liked = !this.wlNews[index].liked;
  }
  togglepdLike(index: number): void {
    this.pdNews[index].liked = !this.wlNews[index].liked;
  }
  togglecaLike(index: number): void {
    this.caNews[index].liked = !this.wlNews[index].liked;
  }
}
