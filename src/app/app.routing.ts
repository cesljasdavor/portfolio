import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CvComponent} from "./cv/cv.component";
import {DevSkillsComponent} from "./dev-skills/dev-skills.component";
import {ProjectsComponent} from "./projects/projects.component";

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cv', component: CvComponent},
  {path: 'dev-skills', component: DevSkillsComponent},
  {path: 'projects', component: ProjectsComponent},

  //any other -> back to home
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
