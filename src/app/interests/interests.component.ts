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
    {title: 'How Paleo Improves Your Liver', avatar: 'liver.jpg', source: 'paleofoodies.com', upvotes: '1.2k', description: 'Dr. Richard Feinbaum explains how your liver is dependent on protein ...', liked: false}
  ];
  caNews = [
    {title: 'What Time of Day Should You Run?', avatar: 'run.jpg', source: 'runninglife.com', upvotes: '1.2k', description: 'New studies show you how to get the most out of your run ...', liked: false},
    {title: 'Cardio Before or After Weightlifting?', avatar: 'cardio.jpg', source: 'buildingbody.com', upvotes: '1.0k', description: 'Our experts explain the primetime to run for mass ...', liked: false}

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
