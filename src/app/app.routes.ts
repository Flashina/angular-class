import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { studentsGuard } from './guards/students.guard';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { BehavioursubjectparentComponent } from './behavioursubjectparent/behavioursubjectparent.component';
import { StepperFormComponent } from './stepper-form/stepper-form.component';
import { PipeComponent } from './pipe/pipe.component';
import { EventparentComponent } from './eventparent/eventparent.component';

export const routes: Routes = [
  {path: '', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'pipe', component: PipeComponent},
  {path: 'event', component: EventparentComponent},
  {path: 'template', component: TemplatedrivenformComponent},
  {path: 'reactive', component: ReactiveformComponent},
  {path: 'stepper', component: StepperFormComponent},
  {path: 'behavior', component: BehavioursubjectparentComponent},
  {path: 'dashboard', children: [
    {path: '', component: DashboardComponent},
    // {path: 'setting', component: DashboardComponent},

  ], canActivate : [studentsGuard] },
];
