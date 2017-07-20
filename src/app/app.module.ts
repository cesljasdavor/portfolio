import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';

import {routing} from "./app.routing";
import {ProfileService} from "./profile.service";
import {AccordionModule} from "ngx-bootstrap";
import { DevSkillsComponent } from './dev-skills/dev-skills.component';
import { ProjectsComponent } from './projects/projects.component';
import {Ng2ScrollimateModule} from "ng2-scrollimate";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    HomeComponent,
    DevSkillsComponent,
    ProjectsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AccordionModule.forRoot(),
    Ng2ScrollimateModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
