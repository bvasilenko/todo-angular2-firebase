import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth';

import { TasksComponent } from './components/tasks';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] }
];


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
  ]
})

export class TasksModule {}
