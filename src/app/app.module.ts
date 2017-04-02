import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SideNavComponent, settingsDialog } from './side-nav/side-nav.component';
import { InterestsBox } from './interestsBox/interestsBox.component';
import { UserBoxComponent } from './user-box/user-box.component';
import { ContentComponent } from './content/content.component';
import { MotivationComponent } from './motivation/motivation.component';
import { GoalsComponent } from './goals/goals.component';
import { InterestsComponent } from './interests/interests.component';
import { GroupsComponent } from './groups/groups.component';
import { PeopleComponent } from './people/people.component';
import { EventsComponent } from './events/events.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SideNavComponent,
    UserBoxComponent,
    ContentComponent,
    MotivationComponent,
    GoalsComponent,
    InterestsComponent,
    GroupsComponent,
    PeopleComponent,
    EventsComponent,
    settingsDialog,
    InterestsBox
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot([
      {
        path: 'motivation',
        component: MotivationComponent,
      },
      {
        path: 'goals',
        component: GoalsComponent,
      },
      {
        path: 'interests',
        component: InterestsComponent,
      },
      {
        path: 'groups',
        component: GroupsComponent,
      },
      {
        path: 'people',
        component: PeopleComponent,
      },
      {
        path: 'events',
        component: EventsComponent,
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    settingsDialog,
    InterestsBox
  ]
})


export class AppModule { }
