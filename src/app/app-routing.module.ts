import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TransparencyComponent } from './components/transparency/transparency.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { BloodComponent } from './components/blood/blood.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
},
{
  path: 'about',
  component: AboutComponent,
  pathMatch: 'full'
},
{
  path: 'transparency',
  component: TransparencyComponent,
  pathMatch: 'full'
},
{
  path: 'jobs',
  component: JobsComponent,
  pathMatch: 'full'
},
{
  path: 'blood',
  component: BloodComponent,
  pathMatch: 'full'
},
{
  path: 'testimonials',
  component: TestimonialsComponent,
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
