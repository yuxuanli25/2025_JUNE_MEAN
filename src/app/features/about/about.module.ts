import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', component: AboutComponent }
];

@NgModule({
  imports: [
    AboutComponent,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { } 