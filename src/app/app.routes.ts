import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { SignupComponent } from './signup/signup.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'services',component: ServicesComponent},
  {path:'projects',component: ProjectsComponent},
  {path:'about', component: AboutUsComponent},
  {path:'signup',component: SignupComponent}
];
