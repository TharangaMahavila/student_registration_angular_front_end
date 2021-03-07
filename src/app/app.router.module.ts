import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoursesComponent} from './view/courses/courses.component';
import {LogInComponent} from './view/log-in/log-in.component';
import {MainMenuComponent} from './view/main-menu/main-menu.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/log-in'
  },
  {
    component: CoursesComponent,
    path: 'courses'
  },
  {
    component: LogInComponent,
    path: 'log-in'
  },
  {
    component: MainMenuComponent,
    path: 'main-menu'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
