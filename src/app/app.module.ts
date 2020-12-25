import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { PersonalComponent } from './personal/personal.component';
import { StructureComponent } from './structure/structure.component';
import { PositionComponent } from './position/position.component';
import { StructureMenuComponent } from './structure-menu/structure-menu.component';
import { DashboardOneComponent } from './dashboard-one/dashboard-one.component';
import { DashboardTwoComponent } from './dashboard-two/dashboard-two.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeftBarComponent,
    PersonalInformationComponent,
    PersonalComponent,
    StructureComponent,
    PositionComponent,
    StructureMenuComponent,
    DashboardOneComponent,
    DashboardTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
